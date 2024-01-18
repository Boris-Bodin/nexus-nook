import {NextResponse} from 'next/server';
import {fetchProducts} from '@/features/products/use-cases/fetch-products';

export async function GET(_request: Request) {
    return NextResponse.json(fetchProducts());
}
