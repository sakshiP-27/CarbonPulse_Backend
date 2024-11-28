import express from "express";

import authController from "../../controllers/authController";

const authRouter = express.Router();

authRouter.post("/login", authController.logIn);

authRouter.post("/signup", authController.signUp);

authRouter.post("/forgotpass", authController.forgotPassword);

export default authRouter;