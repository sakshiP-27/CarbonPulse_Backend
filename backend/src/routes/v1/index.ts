import express from "express";

import checkPing from "../../controllers/checkController";
import authRouter from "./authRoutes";
import dashboardRouter from "./dashboardRoutes";
import profileRouter from "./profileRoutes";
import activityRouter from "./activityRoutes";

const v1Router = express.Router();

v1Router.get("/ping", checkPing); // controller just for ping check
v1Router.use("/auth", authRouter); // for auth purposes (login, signup)
v1Router.use("/dashboard", dashboardRouter); // for getting the user activity summary (graphs, charts)
v1Router.use("/user", profileRouter); // for getting & updating the user profile details 
v1Router.use("/activity", activityRouter) // for user activity logging

export default v1Router;