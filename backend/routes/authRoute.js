import express from "express";

import { userRegister } from "../controller/authController";

const router = express.Router();

router.post("/register", userRegister);

export default router;
