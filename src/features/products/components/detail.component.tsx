'use client';

import {useQuery} from '@tanstack/react-query';
import findProductByIdQuery from "@/features/products/queries/find-product-by-id.query";

export default function DetailComponent({id}: {id: number}) {

    const query = useQuery({
        queryKey: ['products', id],
        queryFn: findProductByIdQuery(id),
    });

    return (
        <>
            <h2>Product view</h2>
            {query.data?.name}
            <br />
        </>
    );
}
