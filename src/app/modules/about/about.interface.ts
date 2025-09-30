export interface IEducation {
    degree: string;
    institution: string;
    year: string;
}

export interface IAbout {
    _id: string;
    name: string;
    bio: string;
    email: string;
    location: string;
    profileImage?: string;
    currentRole?: string;
    skills: string[];
    education?: IEducation;
    github?: string;
    linkedin?: string;
    twitter?: string;
    resumeLink?: string;
    createdAt?: Date;
    updatedAt?: Date;
}
