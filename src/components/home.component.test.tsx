import {expect, test} from 'vitest';
import {render, screen} from '@testing-library/react';
import HomeComponent from './home.component';

test('HomeComponent', () => {
    render(<HomeComponent />);
    expect(screen.getByRole('heading', {level: 1, name: 'Hello, Next.js!'})).toBeDefined();
});
