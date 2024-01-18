'use client';

import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

export default function HomeComponent() {
    // Queries
    const query = useQuery({
        queryKey: ['test'],
        queryFn: () => axios.get('/api/test').then((res) => res.data),
    });

    return (
        <>
            <h1 className='text-3xl font-bold underline'>Hello, Next.js! {process.env['NEXT_PUBLIC_VERSION']}</h1>
            <p>{query.data?.field}</p>
        </>
    );
}
