import express from "express";
import {
  generateUnofficialTranscript,
  requestOfficialTranscript,
  getStudentTranscripts
} from "../controllers/transcript.js";
import { isAuthenticated, isAuthenticatedStudent, isAuthenticatedAdmin } from "../utils/Auth.js";

const router = express.Router();

router.post("/unofficial/:semId", isAuthenticatedStudent, generateUnofficialTranscript);

router.post("/request/official/:semesterId", isAuthenticatedStudent, requestOfficialTranscript);

router.get("/student/trans/:id", getStudentTranscripts);



export default router;