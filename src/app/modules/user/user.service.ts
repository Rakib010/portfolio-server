/* eslint-disable @typescript-eslint/no-explicit-any */
import { envVars } from "../../config/env"
import AppError from "../../errorHelpers/AppError"
import { About } from "../about/about.model"
import { IUser } from "./user.interface"
import { User } from "./user.model"
import bcrypt from "bcryptjs"


const createUser = async (payload: Partial<IUser>) => {
    const { email, password, ...rest } = payload;

    const isUserExits = await User.findOne({ email })
    if (isUserExits) {
        throw new AppError(401, "user already exits")
    }

    const hashedPassword = await bcrypt.hash(password as string, Number(envVars.BCRYPT_SALT_ROUND))

    const user = await User.create({
        email,
        password: hashedPassword,
        ...rest
    })

    return user
}

const aboutSection = async (payload: any) => {
    const about = await About.create(payload)
    return about
}

const getAbout = async () => {
    const about = await About.find()
    return about
}



export const userServices = {
    createUser,
    aboutSection,
    getAbout

}