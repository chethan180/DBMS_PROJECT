import express from "express";
import { ss } from "../controllers/solved.js";

const solv = express.Router();

solv.post("/", ss);

export default solv;

