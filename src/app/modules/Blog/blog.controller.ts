import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { BlogService } from "./blog.service";
import { sendResponse } from "../../utils/sendResponse";

export const createBlog = catchAsync(async (req: Request, res: Response) => {
    const payload = {
        ...req.body,
        author: req.user.id
    };

    const blog = await BlogService.createBlog(payload);

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Blog Created Successfully",
        data: blog
    });
});

export const BlogController = {
    createBlog
}