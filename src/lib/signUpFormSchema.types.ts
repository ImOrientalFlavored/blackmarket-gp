import { z } from 'zod';

export const signUpSchema = z.object({
    email: z.string().email(),
    username: z.string()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Password must be at least 20 characters"),
    password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at least 20 characters")
    .refine(value => value.length >= 8, { message: "Password must be at least 8 characters"}),
});