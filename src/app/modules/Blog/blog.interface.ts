

export interface IBlog {
    _id: string
    title: string;
    content: string;
    thumbnail?: string;
    tags: string[];
    createdAt?: Date;
    updatedAt?: Date;
}
