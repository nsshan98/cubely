import { z } from 'zod';

export const loginFormSchema = z.object({
    email: z.string().email({ message: `The email format you've entered is not valid.` }).min(1, 'Email is required'),
    password: z.string().min(1, 'Password is required'),
})

export type LoginFormTypes = z.infer<typeof loginFormSchema>;
