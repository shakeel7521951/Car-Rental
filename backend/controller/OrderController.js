import sendOrderConfirmationEmail from "../functions/customerEmailTemplate.js";
import sendAdminOrderNotification from "../functions/AdminEmailTemplate.js";
import sendOrderFulfillmentEmail from "../functions/FullFilledEmail.js";
import Order from "../models/Order.js";
import Service from "../models/Service.js";

export const createOrder = async (req, res) => {
  try {
    const { serviceId } = req.params;
    const customerId = req.user?.id;
    const { pickupLocation, dropoffLocation, distance, price, pickupDateTime } =
      req.body;

    if (!customerId) {
      return res.status(404).json({ message: "User not found!" });
    }

    const service = await Service.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: "Service not available" });
    }

    const newOrder = new Order({
      customerId,
      serviceId,
      pickupLocation,
      dropoffLocation,
      distance,
      price,
      pickupDateTime,
    });

    await newOrder.save();

    const populatedOrder = await Order.findById(newOrder._id).populate(
      "serviceId",
      "serviceName serviceCategory"
    );

    const adminEmail = process.env.ADMIN_EMAIL;
    const customerName = req.user?.name;
    const customerEmail = req.user?.email;

    await sendOrderConfirmationEmail(
      customerEmail,
      customerName,
      populatedOrder
    );
    await sendAdminOrderNotification(adminEmail, customerName, populatedOrder);

    return res.status(201).json({
      message: "Order created successfully!",
      order: populatedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("customerId", "name email")
      .populate("serviceId", "serviceName serviceCategory image");

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No orders found!" });
    }

    res.status(200).json({ orders });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error.",
      error: error.message,
    });
  }
};

export const updateOrderStatus = async (req, res) => {
  try {
    const { orderId, newStatus } = req.body;

    if (!orderId || !newStatus) {
      return res
        .status(400)
        .json({ message: "Order ID and new status are required." });
    }

    const allowedStatuses = ["Pending", "Fulfilled", "Rejected"];
    if (!allowedStatuses.includes(newStatus)) {
      return res.status(400).json({
        message:
          "Invalid status. Allowed statuses: Pending, Fulfilled, Rejected.",
      });
    }

    const order = await Order.findById(orderId).populate(
      "customerId",
      "name email"
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found!" });
    }

    const customerName = order.customerId?.name;
    const customerEmail = order.customerId?.email;

    if (newStatus === "Fulfilled" && customerEmail) {
      await sendOrderFulfillmentEmail(customerEmail, customerName, order);
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { orderStatus: newStatus },
      { new: true, runValidators: true }
    ).populate("customerId", "name email");

    return res.status(200).json({
      message: "Order status updated successfully!",
      updatedOrder,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error.",
      error: error.message,
    });
  }
};
