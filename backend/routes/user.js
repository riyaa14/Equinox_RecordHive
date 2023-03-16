import express from "express";
import {
  register,
  registerS,
  login,
  whoami,
  logout,
  updatePassword,
  forgotPassword,
  resetPassword,
  getallStudent,
  getStudentProfile,
  updateProfile
} from "../controllers/user.js";
import { isAuthenticated, isAuthenticatedAdmin } from "../utils/Auth.js";

const router = express.Router();

router.post("/register", register);

router.post("/register/student", isAuthenticatedAdmin, registerS);

router.post("/login", login);

router.get("/whoami", whoami);

router.get("/logout", logout);

router.put("/change/password", isAuthenticated, updatePassword);

router.post("/forgot/password", forgotPassword);

router.put("/password/reset/:token", resetPassword);

router.get("/users", isAuthenticatedAdmin, getallStudent);

router.get("/profile/:id", isAuthenticatedAdmin, getStudentProfile);

router.put("/update/profile", isAuthenticated, updateProfile);



export default router;