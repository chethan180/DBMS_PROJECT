import express from 'express';
import {wupdates} from "../controllers/wupdates.js";

const wupd = express.Router();
wupd.post('/',wupdates);

export default wupd;
