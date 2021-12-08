import express from 'express';
import {hs} from "../controllers/hst_complaints.js";

const hst = express.Router();
hst.post('/',hs);

export default hst;
