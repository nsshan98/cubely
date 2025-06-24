import { z } from "zod";

export const storeFormSchema = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    store_name: z.string().min(1, "Store name is required"),
    store_email: z.string().optional(),
    phone_number: z.string().optional(),
    store_logo: z.instanceof(File).optional(),
    store_address: z.string().optional()
})

export type StoreFormTypes = z.infer<typeof storeFormSchema>;