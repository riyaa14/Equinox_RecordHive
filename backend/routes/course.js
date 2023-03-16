import express from "express";
import {
  createCourse,
  deleteCourse,
  updateCourse,
  getallCourses,
  getCourse,
  addCourse,
  removeCourse,
  gpaCalc,
  addStudentMarks,
  getCourseHistory,
  getSGPA

} from "../controllers/course.js";
import { isAuthenticated, isAuthenticatedAdmin, isAuthenticatedStudent } from "../utils/Auth.js";

const router = express.Router();

router.post("/create", isAuthenticatedAdmin, createCourse);

router.delete("/delete/:courseId", isAuthenticatedAdmin, deleteCourse);

router.put("/update/:courseId", isAuthenticatedAdmin, updateCourse);

router.get("/all", isAuthenticatedAdmin, getallCourses);

router.get("/:courseId", isAuthenticatedAdmin, getCourse);

router.put("/add/course/:courseId/:id", addCourse);

router.put("/remove/course/:courseId", removeCourse);

router.get("/gpa/:sid", isAuthenticatedAdmin, gpaCalc);

router.get("/sgpa/:semId/:id", isAuthenticatedAdmin, getSGPA);

router.get("/history/:id", isAuthenticatedAdmin, getCourseHistory);

router.put("/add/marks/:sid", addStudentMarks);


export default router;