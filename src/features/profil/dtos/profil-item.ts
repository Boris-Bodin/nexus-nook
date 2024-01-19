import {z} from 'zod';

export type ProfilItem = {
    id: number;
    label: string;
    type: string;
    uri: string;
};

export const profilItemSchema = z.object({
    id: z.number(),
    label: z.string(),
    type: z.string(),
    uri: z.string(),
});
