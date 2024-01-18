import axios from 'axios';
import {Product} from '@/features/products/domain/product';
import {QueryFunction} from "@tanstack/react-query";

export default function findProductsQuery(): QueryFunction<Array<Product>> {
    return () => axios.get<Array<Product>>('/api/products').then((res) => res.data);
}
