export interface IProject {
    _id: string;
    title: string;
    description: string;
    thumbnail?: string;
    features?: string[];
    liveLink?: string;
    repoLink?: string;
    createdAt?: Date;
    updatedAt?: Date;
}