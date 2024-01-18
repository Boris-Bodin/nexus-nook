import {NextResponse} from 'next/server';
import fetchProductById from "@/features/products/use-cases/fetch-product-by-id";

export async function GET(_request: Request, context: {params: {id: string}}) {
    return NextResponse.json(await fetchProductById(+context.params.id));
}
