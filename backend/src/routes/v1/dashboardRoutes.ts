import express from "express";

import dashboardController from "../../controllers/dashboardController";

const dashboardRouter = express.Router();

dashboardRouter.get("/summary", dashboardController.showDataDashboard);

export default dashboardRouter;