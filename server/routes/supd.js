import express from 'express';
import {su} from "../controllers/supdates.js";

const supd = express.Router();
supd.post('/',su);

export default supd;
