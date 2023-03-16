import express from "express";
import {
  createSemester,
  deleteSemester,
  updateSemester,
  getallSemester,
  getSemester
} from "../controllers/semester.js";
import { isAuthenticated, isAuthenticatedAdmin, isAuthenticatedStudent } from "../utils/Auth.js";

const router = express.Router();

router.post("/create", isAuthenticatedAdmin, createSemester);

router.delete("/delete/:semesterId", isAuthenticatedAdmin, deleteSemester);

router.put("/update/:semesterId", isAuthenticatedAdmin, updateSemester);

router.get("/all", isAuthenticatedAdmin, getallSemester);

router.get("/:semesterId", isAuthenticatedAdmin, getSemester);




export default router;