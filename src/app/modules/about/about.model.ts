import { Schema, model } from "mongoose";
import { IAbout } from "./about.interface";


const aboutSchema = new Schema<IAbout>(
    {
        name: { type: String, required: true },
        bio: { type: String, required: true },
        email: { type: String, required: true },
        location: { type: String, required: true },
        profileImage: { type: String },
        skills: { type: [String], default: [] },

    },
    {
        timestamps: true,
    }
);


export const About = model<IAbout>("About", aboutSchema);

