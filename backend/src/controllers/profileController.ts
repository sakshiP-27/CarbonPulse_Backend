import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

function getUserProfileDetails(req: Request, res: Response) {
    // TODO: implement the logic user profile service here

    return res.status(StatusCodes.ACCEPTED).json({
        status: true,
        message: "User Profile details retrieved!",
        error: {},
        // data: userProfileData
    });
}

function updateUserProfileDetails(req: Request, res: Response) {
    // TODO: implement the logic user profile service here

    return res.status(StatusCodes.CREATED).json({
        status: true,
        message: "User Profile Details have been updated!",
        error: {},
        // data: userProfileData
    });
}

export default {
    getUserProfileDetails,
    updateUserProfileDetails
}
