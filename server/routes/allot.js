import express from "express";
import { allotment } from "../controllers/allot.js";

const allot = express.Router();

allot.post("/", allotment);

export default allot;

