'use client';

import {useQuery} from '@tanstack/react-query';
import {queryProducts} from '@/features/products/hooks/query-products';
import Link from 'next/link';

export default function ProductListComponent() {
    // Queries
    const query = useQuery({
        queryKey: ['products'],
        queryFn: queryProducts(),
    });

    return (
        <>
            <h2>Products list</h2>
            {query.data?.map((p) => (
                <p key={p.id}>
                    {p.name}
                    <Link className={'m-5'} href={'/products/' + p.id}>
                        View
                    </Link>
                </p>
            ))}
            <Link href={'/'}>Back Home</Link>
        </>
    );
}
