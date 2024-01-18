import axios from 'axios';
import {Product} from '@/features/products/domain/product';
import {QueryFunction} from "@tanstack/react-query";

export default function findProductByIdQuery(id: number): QueryFunction<Product> {
    return () => axios.get<Product>('/api/products/' + id).then((res) => res.data);
}
