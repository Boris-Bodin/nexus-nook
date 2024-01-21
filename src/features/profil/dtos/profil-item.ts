import {z} from 'zod';

export const ProfilItemSchema = z.object({
    id: z.number(),
    label: z.string(),
    type: z.string(),
    uri: z.string(),
});

export type ProfilItem = z.infer<typeof ProfilItemSchema>;
