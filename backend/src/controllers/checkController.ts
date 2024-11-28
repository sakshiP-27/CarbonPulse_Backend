import { Request, Response } from "express";

export default function checkPing(req: Request, res: Response) {
    return res.status(200).json({
        message: "Ping Check OK"
    });
}