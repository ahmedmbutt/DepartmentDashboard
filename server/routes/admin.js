import express from "express";
import { postNotification } from "../controllers/admin.js";

const router = express.Router();

router.post('/notification', postNotification)

export default router;
