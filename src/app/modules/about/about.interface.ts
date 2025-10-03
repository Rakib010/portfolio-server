
export interface IAbout {
    _id: string;
    name: string;
    bio: string;
    email: string;
    location: string;
    profileImage?: string;
    skills: string[];
    createdAt?: Date;
    updatedAt?: Date;
}
