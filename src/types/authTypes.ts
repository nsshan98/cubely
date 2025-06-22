import { z } from 'zod';

export const loginFormSchema = z.object({
    email: z.string().email({ message: `The email format you've entered is not valid.` }).min(1, 'Email is required'),
    password: z.string().min(1, 'Password is required'),
})

export const signupFormSchema = z.object({
    full_name: z.string().min(1, 'Full name is required'),
    email: z.string().email({ message: `The email format you've entered is not valid.` }).min(1, 'Email is required'),
    password: z.string().min(8, 'Your password should contain at least 8 characters.').refine((value) => /[A-Z]/.test(value) && /[a-z]/.test(value) && /[#?!@$%^&*-]/.test(value), { message: 'Password must include at least one uppercase letter, one lowercase letter & one special character.' }),
    password_confirm: z.string().min(1, 'Password confirmation is required')
}).refine((data) => data.password === data.password_confirm, {
    message: 'The confirmation password must match the original password.',
    path: ['password_confirm'],
})

export type LoginFormTypes = z.infer<typeof loginFormSchema>;
export type SignupFormTypes = z.infer<typeof signupFormSchema>;
