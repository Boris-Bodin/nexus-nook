import axios from 'axios';
import {QueryFunction} from "@tanstack/react-query";
import {Profil} from "@/features/profil/dto/profil";

export default function findProfilBySlugQuery(slug: string): QueryFunction<Profil> {
    return () => axios.get<Profil>('/api/profil/' + slug).then((res) => res.data);
}
