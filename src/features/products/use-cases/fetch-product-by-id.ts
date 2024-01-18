import {Product} from '@/features/products/domain/product';

export const fetchProductById: (id: number) => Product = function (id: number) {
    return {
        id,
        name: `Product ${id}`,
    };
};
