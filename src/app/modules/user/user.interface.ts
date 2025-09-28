
export enum Role {
    ADMIN = "ADMIN",
}
export interface IUser {
    _id: string
    name: string;
    email: string;
    password: string;
    role: Role;
    createdAt?: Date;
}
