

export interface IBlog {
    _id: string
    title: string;
    content: string;
    thumbnail?: string;
    slug: string;
    tags: string[];
    createdAt?: Date;
}
