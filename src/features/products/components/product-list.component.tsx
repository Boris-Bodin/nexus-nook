'use client';

import {useQuery} from '@tanstack/react-query';
import {queryProducts} from '@/features/products/hooks/query-products';
import Link from 'next/link';
import {Button, List, ListItem, ListItemText} from '@mui/material';

import {Star} from '@mui/icons-material';

export default function ProductListComponent() {
    // Queries
    const query = useQuery({
        queryKey: ['products'],
        queryFn: queryProducts(),
    });

    return (
        <>
            <h2>Products list</h2>
            <List>
                {query.data?.map((p) => (
                    <ListItem key={p.id}>
                        <Star />
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
