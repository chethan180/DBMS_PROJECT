import express from 'express';
import {sm} from "../controllers/smesspage.js";

const smess = express.Router();
smess.post('/',sm);

export default smess;
