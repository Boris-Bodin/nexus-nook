import {NextResponse} from 'next/server';
import findProductById from "@/features/products/resources/find-product-by-id";

export async function GET(_request: Request, context: { params: { id: string } }) {
    return NextResponse.json(await findProductById(+context.params.id));
}
