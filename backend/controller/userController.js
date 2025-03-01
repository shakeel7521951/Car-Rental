import User from "../models/User.js";
import sendMail from "../utils/SendMail.js";
import cloudinary from "cloudinary";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User already exists" });

    user = new User({ name, email, password, status: "unverified" });

    const otp = await user.generateOTP();

    await user.save();

    const subject = "Verify Your Email - Car Rental Service";
    const text = `
      <p>Hello <strong>${name}</strong>,</p>
      <p>Thank you for signing up! To complete your registration, please verify your email.</p>
      <p>Your OTP for verification is:</p>
      <h3 style="font-size: 32px; font-weight: bold; color: #4CAF50;">${otp}</h3>
      <p>If you did not request this, please ignore this email.</p>
      <p>Best regards,</p>
      <p>The Car Rental Service Team</p>
    `;

    await sendMail(email, subject, text);

    res
      .status(201)
      .json({ message: "OTP sent to email. Verify your account." });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const verifyUser = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.verifyOTP(otp)) {
      return res.status(400).json({ message: "Invalid or expired OTP" });
    }

    // Mark user as verified
    user.otp = undefined;
    user.otpExpires = undefined;
    user.status = "verified";
    await user.save();

    const token = user.generateToken();
    res.cookie("token", token, { httpOnly: true, maxAge: 60 * 60 * 1000 });

    res.status(200).json({ message: "User verified successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    if (user.status === "unverified") {
      await User.deleteOne({ email });
      return res
        .status(403)
        .json({ message: "Account not verified. Please register again." });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = user.generateToken();
    res.cookie("token", token, { httpOnly: true, maxAge: 60 * 60 * 1000 });

    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "User logged out successfully" });
};

export const myProfile = async (req, res) => {
  try {
    const user = req.user;

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updatePassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword, confirmPassword } = req.body;

    if (!currentPassword || !newPassword || !confirmPassword) {
      return next(new errorHandler("All fields are required", 400));
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json("User not found!");
    }

    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(403).json("Old password is incorrect!");
    }

    if (currentPassword === newPassword) {
      return res
        .status(401)
        .json({ message: "Old and New Password could not be same" });
    }

    if (newPassword !== confirmPassword) {
      return res.status(401).json("Passwords do not match!");
    }

    user.password = newPassword;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error! Please try again later" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized request" });
    }

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // If no file is uploaded, keep the existing profile picture
    const profilePicUrl = req.file?.path || user.profilePic;

    // Update the user's profile picture
    user.profilePic = profilePicUrl;
    await user.save();

    return res
      .status(200)
      .json({ message: "Profile updated successfully", user });
  } catch (error) {
    console.error("Error updating profile:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const allUsers = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(404).json({ message: "NO User Found!" });
    }
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error.Please try again later" });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    const { userId, role } = req.body;

    if (!userId || !role) {
      return res
        .status(400)
        .json({ message: "User ID and role are required." });
    }

    const updateUserRole = await User.findByIdAndUpdate(
      userId,
      { role },
      { new: true }
    );

    if (!updateUserRole) {
      return res
        .status(400)
        .json({ message: "Something went wrong. Please try again later." });
    }

    res
      .status(200)
      .json({
        message: "User role updated successfully",
        user: updateUserRole,
      });
  } catch (error) {
    console.error("Error updating user role:", error);
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
