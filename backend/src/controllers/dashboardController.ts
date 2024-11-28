import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

function showDataDashboard(req: Request, res: Response) {
    // TODO: Add the service logic over here
    return res.status(StatusCodes.OK).json({
        status: true,
        message: "Dashboard Data fetched!",
        error: {},
         // data: userDashboardData
    });
}

export default {
    showDataDashboard
}