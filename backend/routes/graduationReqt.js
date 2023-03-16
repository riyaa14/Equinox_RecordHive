import express from "express";
import {
  createGR
} from "../controllers/graduationReqt.js";
import { isAuthenticated, isAuthenticatedAdmin, isAuthenticatedStudent } from "../utils/Auth.js";

const router = express.Router();

router.post("/create", createGR);


export default router;