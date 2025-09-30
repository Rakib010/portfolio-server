import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProjectServices } from "./project.services";



const projectShowcase = catchAsync(async (req: Request, res: Response) => {
    const project = await ProjectServices.projectShowcase(req.body);
    sendResponse(res, {
        success: true,
        statusCode: 201,
        message: "Project Created Successfully",
        data: project,
    });
});

const getAllProject = catchAsync(async (req: Request, res: Response) => {
    const projects = await ProjectServices.getAllProject();
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Projects Fetched Successfully",
        data: projects,
    });
});

const getProjectById = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const project = await ProjectServices.getProjectById(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Project Fetched Successfully",
        data: project,
    });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const project = await ProjectServices.updateProject(id, req.body);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Project Updated Successfully",
        data: project,
    });
});

const deleteProject = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;
    const project = await ProjectServices.deleteProject(id);
    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Project Deleted Successfully",
        data: project,
    });
});

export const ProjectController = {
    projectShowcase,
    getAllProject,
    getProjectById,
    updateProject,
    deleteProject,
};
