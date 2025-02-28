import express from 'express';
import { createOrder, getAllOrders, updateOrderStatus } from '../controller/OrderController.js';
import auth from '../middlewares/AuthMiddleWare.js';
const router = express.Router();

router.post("/create-order/:serviceId",auth,createOrder);
router.get('/all-orders',auth,getAllOrders);
router.put('/update-order-status/:orderId',auth,updateOrderStatus);

export default router;