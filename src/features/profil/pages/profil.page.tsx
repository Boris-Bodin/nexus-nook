'use client';

import findProfilBySlugQuery from "@/features/profil/queries/find-profil-by-slug.query";
import {useQuery} from "@tanstack/react-query";

export default function ProfilPage({slug}: { slug: string, editMode?: boolean }) {

    const query = useQuery({
        queryKey: ['profil', slug],
        queryFn: findProfilBySlugQuery(slug),
    });

    return (
        <>
            <h2>{query.data?.title}</h2>
            <h3>{query.data?.subTitle}</h3>
            <br/>
        </>
    );
}
