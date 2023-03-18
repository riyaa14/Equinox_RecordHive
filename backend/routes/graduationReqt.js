import express from "express";
import {
  createGR,
  getGraduationTrackerByStudentId,
} from "../controllers/graduationReqt.js";
import {
  isAuthenticated,
  isAuthenticatedAdmin,
  isAuthenticatedStudent,
} from "../utils/Auth.js";

const router = express.Router();

router.post("/create", createGR);

router.get(
  "/gradReq/:sid",
  isAuthenticatedAdmin,
  getGraduationTrackerByStudentId
);

export default router;
