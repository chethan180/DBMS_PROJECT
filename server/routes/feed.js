import express from "express";
import { fd } from "../controllers/feedback.js";

const feed = express.Router();

feed.post("/", fd);

export default feed;

