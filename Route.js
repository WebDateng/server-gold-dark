import express from "express";
import { getChats, saveChat } from "./Controller.js";

const router = express.Router();

router.get("/chats", getChats);
router.post("/chat", saveChat);

export default router;
