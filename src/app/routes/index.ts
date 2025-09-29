import { Router } from "express"
import { usersRoutes } from "../modules/user/user.route"
import { authRoutes } from "../modules/auth/auth.route"
import { BlogRoutes } from "../modules/Blog/Blog.routes"


const routes = Router()


routes.use('/api/v1/user', usersRoutes)
routes.use('/api/v1/auth', authRoutes)
routes.use('/api/v1/blog', BlogRoutes)


export default routes