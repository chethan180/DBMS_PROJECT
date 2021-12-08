import express from 'express';
import {wc} from "../controllers/whst_complaints.js";

const whst = express.Router();
whst.post('/',wc);

export default whst;
