import { Router } from "express";A
import { signIn } from "../controllers/auth";
import { signUp } from "../controllers/auth";

const routerAuth = Router();


routerAuth.post("/signup", signUp);
routerAuth.post("/signin", signIn);
export default routerAuth;
