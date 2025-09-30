/* eslint-disable @typescript-eslint/no-explicit-any */
import AppError from "../../errorHelpers/AppError";
import { Project } from "./project.model";


const projectShowcase = async (payload: any) => {
    const project = await Project.create(payload);
    return project;
};

const getAllProject = async () => {
    return await Project.find();
};

const getProjectById = async (id: string) => {
    const project = await Project.findById(id);
    if (!project) throw new AppError(404, "Project not found");
    return project;
};

const updateProject = async (id: string, payload: any) => {
    const project = await Project.findByIdAndUpdate(id, payload, { new: true });
    if (!project) throw new AppError(404, "Project not found");
    return project;
};

const deleteProject = async (id: string) => {
    const project = await Project.findByIdAndDelete(id);
    if (!project) throw new AppError(404, "Project not found");
    return project;
};

export const ProjectServices = {
    projectShowcase,
    getAllProject,
    getProjectById,
    updateProject,
    deleteProject,
};