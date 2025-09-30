import { IBlog } from "./blog.interface";
import { Blog } from "./blog.model";

// Create blog
const createBlog = async (payload: Partial<IBlog>) => {
    return await Blog.create(payload);
};

// Get all blogs
const getAllBlog = async () => {
    return await Blog.find();
};

// Get blog by ID
const getBlogById = async (id: string) => {
    return await Blog.findById(id);
};

// Update blog
const updateBlog = async (id: string, payload: Partial<IBlog>) => {
    return await Blog.findByIdAndUpdate(id, payload, { new: true });
};

// Delete blog
const deleteBlog = async (id: string) => {
    return await Blog.findByIdAndDelete(id);
};

export const BlogService = {
    createBlog,
    getAllBlog,
    getBlogById,
    updateBlog,
    deleteBlog,
};
