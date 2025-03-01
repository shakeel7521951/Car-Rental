import express from "express";
import {
  allUsers,
  login,
  logout,
  myProfile,
  register,
  updatePassword,
  updateProfile,
  updateUserRole,
  verifyUser,
} from "../controller/userController.js";
import auth from "../middlewares/AuthMiddleWare.js";
const router = express.Router();
import upload from "../middlewares/multerConfig.js";

router.post("/login", login);
router.post("/sign-up", register);
router.post("/verify-user", verifyUser);
router.post("/logout", auth, logout);
router.get("/my-profile", auth, myProfile);
router.put("/update-password", auth, updatePassword);
router.get("/all-users",auth,allUsers);
router.put("/update-user-role",auth,updateUserRole);
router.put("/update-profile", upload.single("profilePic"),auth, updateProfile);

export default router;