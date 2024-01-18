import axios from 'axios';
import {Product} from '@/features/products/domain/product';

export const queryProducts: () => () => Promise<Array<Product>> = () => () =>
    axios.get<Array<Product>>('/api/products').then((res) => res.data);
