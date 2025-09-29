import { Router } from 'express';
import { BlogController } from './blog.controller';



const route = Router()


route.post('/createBlog', BlogController.createBlog)


export const BlogRoutes = route



