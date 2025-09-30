import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { BlogService } from "./blog.service";
import { sendResponse } from "../../utils/sendResponse";

// Create Blog
export const createBlog = catchAsync(async (req: Request, res: Response) => {
    //const decodedToken = req.user as JwtPayload;
    // author: decodedToken.id,

    const payload = req.body
    
    const blog = await BlogService.createBlog(payload);

    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Blog Created Successfully",
        data: blog,
    });
});

// Get All Blogs
export const getAllBlog = catchAsync(async (req: Request, res: Response) => {
    const blogs = await BlogService.getAllBlog();

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Blogs fetched successfully",
        data: blogs,
    });
});

// Get Blog By Id
export const getBlogById = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const blog = await BlogService.getBlogById(id);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Blog fetched successfully",
        data: blog,
    });
});

// Update Blog
export const updateBlog = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const payload = req.body;
    const blog = await BlogService.updateBlog(id, payload);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Blog updated successfully",
        data: blog,
    });
});

// Delete Blog
export const deleteBlog = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const blog = await BlogService.deleteBlog(id);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Blog deleted successfully",
        data: blog,
    });
});

export const BlogController = {
    createBlog,
    getAllBlog,
    getBlogById,
    updateBlog,
    deleteBlog,
}