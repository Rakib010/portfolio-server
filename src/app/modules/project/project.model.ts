import { model, Schema } from "mongoose";
import { IProject } from "./project.services";

const projectSchema = new Schema<IProject>(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        thumbnail: { type: String },
        features: { type: [String], default: [] },
        liveLink: { type: String },
        repoLink: { type: String },
    },
    { timestamps: true }
);
export const Project = model<IProject>("Project", projectSchema);