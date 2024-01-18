'use client';

import {useQuery} from '@tanstack/react-query';
import Link from 'next/link';
import {Button, List, ListItem, ListItemText} from '@mui/material';
import {Star} from '@mui/icons-material';
import findProductsQuery from "@/features/products/queries/find-products.query";

export default function ProductListComponent() {

    const query = useQuery({
        queryKey: ['products'],
        queryFn: findProductsQuery(),
    });

    return (
        <>
            <h2>Products list</h2>
            <List>
                {query.data?.map((p) => (
                    <ListItem key={p.id}>
                        <Star/>
                        <ListItemText>{p.name}</ListItemText>
                        <Link href={'/products/' + p.id}>
                            <Button>View</Button>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </>
    );
}
