import {z} from 'zod';
import {ProfilItemSchema} from '@/features/profil/dtos/profil-item';

export const ProfilSchema = z.object({
    id: z.number(),
    slug: z.string().min(1),
    title: z.string(),
    subTitle: z.string(),
    items: z.array(ProfilItemSchema),
});

export type Profil = z.infer<typeof ProfilSchema>;
