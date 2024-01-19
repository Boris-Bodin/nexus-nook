import ProfilPage from "@/features/profil/pages/profil.page";


export default function Page({params}: { params: { slug: string } }) {
    return <ProfilPage slug={params.slug} editMode={true}/>;
}
