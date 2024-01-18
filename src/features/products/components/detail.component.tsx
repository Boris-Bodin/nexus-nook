'use client';

import {useQuery} from '@tanstack/react-query';
import {queryProductById} from '@/features/products/hooks/query-product-by-id';
import Link from 'next/link';

export default function DetailComponent({id}: {id: number}) {
    // Queries
    const query = useQuery({
        queryKey: ['products', id],
        queryFn: queryProductById(id),
    });

    return (
        <>
            <h2>Product view</h2>
            {query.data?.name}
            <br />
            <Link href={'/products'}>Back Products</Link>
        </>
    );
}
