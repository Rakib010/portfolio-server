import { Router } from 'express';
import { userController } from './user.controller';


const route = Router()

//validateRequest(createUserZodSchema)
route.post('/register', userController.createUser)
route.post('/about', userController.aboutSection)



export const usersRoutes = route

