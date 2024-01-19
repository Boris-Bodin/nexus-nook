import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import mockQueryClient from "@/shared/test/mock-query-client";
import ProfilPage from "@/features/profil/pages/profil.page";

test('ProfilPage', () => {
    render(mockQueryClient(<ProfilPage slug={'test-slug'}/>));
    expect(screen.getByRole('heading', {level: 2, name: ''})).toBeDefined();
    expect(screen.getByRole('heading', {level: 3, name: ''})).toBeDefined();
});
