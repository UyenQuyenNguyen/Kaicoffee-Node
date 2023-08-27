import { Router } from "express";
import { signIn } from "../controllers/auth.js";
import { signUp } from "../controllers/auth.js";

const routerAuth = Router();


routerAuth.post("/signup", signUp);
routerAuth.post("/signin", signIn);
export default routerAuth;
