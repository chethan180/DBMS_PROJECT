import express from "express";
import { signin, signup } from "../controllers/auth.js";

const Auth = express.Router();

Auth.post("/signin", signin);
Auth.post("/signup", signup);

export default Auth;

