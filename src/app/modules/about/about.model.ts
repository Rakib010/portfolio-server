import { Schema, model } from "mongoose";
import { IAbout, IEducation, IProject } from "./about.interface";


const educationSchema = new Schema<IEducation>({
    degree: { type: String, required: true },
    institution: { type: String, required: true },
    year: { type: String, required: true },
});

const aboutSchema = new Schema<IAbout>(
    {
        name: { type: String, required: true },
        bio: { type: String, required: true },
        email: { type: String, required: true },
        location: { type: String, required: true },
        profileImage: { type: String },
        currentRole: { type: String },
        skills: { type: [String], default: [] },
        education: { type: [educationSchema], default: [] },
        github: { type: String },
        linkedin: { type: String },
        twitter: { type: String },
        resumeLink: { type: String },
    },
    {
        timestamps: true,
    }
);


export const About = model<IAbout>("About", aboutSchema);

