import {QueryFunction} from '@tanstack/react-query';
import {Profil, profilSchema} from '@/features/profil/dtos/profil';

export default function findProfilBySlugQuery(slug: string): QueryFunction<Profil> {
    return () =>
        fetch('/api/profil/' + slug)
            .then(async (res) => await res.json())
            .then((res) => profilSchema.parse(res))
            .catch((err) => {
                console.error(err);
                throw err;
            });
}
