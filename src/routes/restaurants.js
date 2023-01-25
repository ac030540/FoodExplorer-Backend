import express from "express";
import { index } from "../controllers/restaurants.js";

const router = express.Router();

/**
 * Main Page
 */
router.get("/:location", index);

export default router;
