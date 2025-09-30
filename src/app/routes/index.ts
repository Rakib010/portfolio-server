import { Router } from "express"
import { usersRoutes } from "../modules/user/user.route"
import { authRoutes } from "../modules/auth/auth.route"
import { BlogRoutes } from "../modules/Blog/blog.routes"
import { ProjectRoutes } from "../modules/project/project.route"



const routes = Router()


routes.use('/api/v1/user', usersRoutes)
routes.use('/api/v1/auth', authRoutes)
routes.use('/api/v1/blog', BlogRoutes)
routes.use('/api/v1/project', ProjectRoutes)


export default routes