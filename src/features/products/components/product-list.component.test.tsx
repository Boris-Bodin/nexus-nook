import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import ProductListComponent from './product-list.component';
import mockQueryClient from "@/shared/test/mock-query-client";

test('HomeComponent', () => {
    render(mockQueryClient(<ProductListComponent />));
    expect(screen.getByRole('heading', {level: 2, name: 'Products list'})).toBeDefined();
});
