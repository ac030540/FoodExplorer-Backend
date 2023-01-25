import express from "express";
import { index } from "../controllers/location.js";

const router = express.Router();

/**
 * Main Page
 */
router.get("/", index);

export default router;
