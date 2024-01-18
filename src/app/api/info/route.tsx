import {NextResponse} from 'next/server';
import {fetchInfo} from '@/features/administration/use-cases/fetch-info';

export async function GET(_request: Request) {
    return NextResponse.json(fetchInfo());
}
