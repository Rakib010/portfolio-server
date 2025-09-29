import { IBlog } from "./blog.interface"
import { Blog } from "./blog.model"


export const createBlog = async (payload: Partial<IBlog>) => {
    const blog = await Blog.create(payload)
    return blog
}

export const BlogService = {
    createBlog
}