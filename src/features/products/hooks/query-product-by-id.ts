import axios from 'axios';
import {Product} from '@/features/products/domain/product';

export const queryProductById: (id: number) => () => Promise<Product> = (id: number) => () =>
    axios.get<Product>('/api/products/' + id).then((res) => res.data);
