
import { z } from "zod";

export const createUserZodSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),

});

/*  
     role: z.enum(Object.values(Role)),
  ), */
