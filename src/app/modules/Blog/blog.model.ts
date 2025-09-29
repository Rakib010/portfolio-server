import { model, Schema } from "mongoose";
import { IBlog } from "./blog.interface";


const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    content: { type: String, required: true },
    thumbnail: { type: String },
    slug: { type: String, required: true, unique: true },
    tags: { type: [String], default: [] },
    createdAt: { type: Date, default: Date.now }
});


export const Blog = model<IBlog>("Blog", blogSchema);