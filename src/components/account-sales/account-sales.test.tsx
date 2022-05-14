import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import AccountSales from './index';

afterEach(cleanup);

it('Pass value without parameters, should return the component with 0', () => {
    const { container, getByText } = render(<AccountSales />);

    const attempts = 0;
    const saved = 0;

    expect(container?.firstChild).toHaveClass('account-sales');

    // ... need continue with text test
});
