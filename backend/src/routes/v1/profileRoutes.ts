import express from "express";

import profileController from "../../controllers/profileController";

const profileRouter = express.Router();

profileRouter.get("/getprofile", profileController.getUserProfileDetails);

profileRouter.put("/updateprofile", profileController.updateUserProfileDetails);

export default profileRouter