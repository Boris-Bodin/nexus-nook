import {NextResponse} from 'next/server';
import findProducts from "@/features/products/resources/find-products";

export async function GET(_request: Request) {
    return NextResponse.json(await findProducts());
}
