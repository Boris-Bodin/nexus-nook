import {z} from 'zod';

export type Profil = {
    id: number;
    slug: string;
    title: string;
    subTitle: string;
};

export const profilSchema = z.object({
    id: z.number(),
    slug: z.string().min(1),
    title: z.string(),
    subTitle: z.string(),
});
