import express from "express";
import {
  generateUnofficialTranscript,
  requestOfficialTranscript,
  getStudentTranscripts
} from "../controllers/transcript.js";
import { isAuthenticated, isAuthenticatedStudent, isAuthenticatedAdmin } from "../utils/Auth.js";

const router = express.Router();

router.post("/unofficial/:semesterId", isAuthenticatedStudent, generateUnofficialTranscript);

router.post("/request/official", isAuthenticatedStudent, requestOfficialTranscript);

router.get("/student/transcripts", isAuthenticatedAdmin, getStudentTranscripts);



export default router;