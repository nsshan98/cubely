import { z } from 'zod';

export const loginFormSchema = z.object({
    email: z.string().email({ message: `The email format you've entered is not valid.` }).min(1, 'Email is required'),
    password: z.string().min(1, 'Password is required'),
})

export const signupFormSchema = z.object({
    full_name: z.string().min(1, 'Full name is required'),
    email: z.string().email({ message: `The email format you've entered is not valid.` }).min(1, 'Email is required'),
    password: z.string().min(1, 'Password is required'),
})

export type LoginFormTypes = z.infer<typeof loginFormSchema>;
export type SignupFormTypes = z.infer<typeof signupFormSchema>;
