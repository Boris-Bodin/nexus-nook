import {NextResponse} from 'next/server';
import findProductBySlug from "@/features/profil/actions/find-profil-by-id";

export async function GET(_request: Request, context: { params: { slug: string } }) {
    return NextResponse.json(await findProductBySlug(context.params.slug));
}
