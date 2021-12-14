import express from "express";
import { createOutpass } from "../controllers/outpass.js";

const out = express.Router();

out.post("/", createOutpass);

export default out;

