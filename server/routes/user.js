import express from "express";
import { login, getNotification } from "../controllers/user.js";

const router = express.Router();

router.post("/login", login);
router.get("/notification", getNotification);

export default router;
