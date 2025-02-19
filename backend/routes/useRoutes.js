import express from "express";
import {
  login,
  logout,
  myProfile,
  register,
  updatePassword,
  verifyUser,
} from "../controller/userController.js";
import auth from "../middlewares/AuthMiddleWare.js";
const router = express.Router();

router.post("/login", login);
router.post("/sign-up", register);
router.post("/verify-user", verifyUser);
router.post("/logout", auth, logout);
router.get("/my-profile", auth, myProfile);
router.put("/update-password", auth, updatePassword);

export default router;
