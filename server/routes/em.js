import express from "express";
import { empty } from "../controllers/empty.js";

const em = express.Router();

em.post("/", empty);

export default em;

