import {Product} from '@/features/products/domain/product';

export const fetchProducts: () => Array<Product> = function () {
    return Array.from({length: 10}, (_, i) => ({
        id: i,
        name: `Product ${i}`,
    }));
};
