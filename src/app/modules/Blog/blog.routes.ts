import { Router } from 'express';
import { BlogController } from './blog.controller';

const route = Router();

// Public
route.get("/", BlogController.getAllBlog);
route.get("/:id", BlogController.getBlogById);

// Private (Admin only)
route.post("/", BlogController.createBlog);
route.patch("/:id", BlogController.updateBlog);
route.delete("/:id", BlogController.deleteBlog);

export const BlogRoutes = route

