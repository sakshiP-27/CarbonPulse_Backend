import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";

function logIn(req: Request, res: Response) {
    // TODO: Implement logic here
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "User Logged In",
        error: {},
        // data: userData
    });
}

function signUp(req: Request, res: Response) {
    // TODO: Implement logic here
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "User Signed Up",
        error: {},
        // data: userData
    });
}

function forgotPassword(req: Request, res: Response) {
    // TODO: Implement logic here
    return res.status(StatusCodes.ACCEPTED).json({
        success: true,
        message: "Password Changed!",
        error: {},
        // data: userData
    })
}

export default {
    logIn,
    signUp,
    forgotPassword
}