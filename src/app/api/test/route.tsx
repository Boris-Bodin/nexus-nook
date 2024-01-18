import {NextResponse} from 'next/server';
import {getTest} from '@/hooks/test';

export function GET() {
    return NextResponse.json(getTest());
}
