import {NextResponse} from 'next/server';
import {getInfo} from '@/hooks/info';

export function GET() {
    return NextResponse.json(getInfo());
}
