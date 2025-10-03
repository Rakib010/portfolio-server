import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { userServices } from "./user.service";


const createUser = catchAsync(async (req: Request, res: Response) => {
    const user = await userServices.createUser(req.body)
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "User Created Successfully",
        data: user
    })
})

const aboutSection = catchAsync(async (req: Request, res: Response) => {
    const user = await userServices.aboutSection(req.body)
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "About Created Successfully",
        data: user
    })
})
const getAbout = catchAsync(async (req: Request, res: Response) => {
    const user = await userServices.getAbout()
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "About data get Successfully",
        data: user
    })
})




export const userController = {
    createUser,
    aboutSection,
    getAbout
}