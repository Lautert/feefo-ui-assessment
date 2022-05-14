import { cleanup, render } from '@testing-library/react';
import AccountMetric from './index';

afterEach(cleanup);

it("Pass value with {0} and label with {''}, should return null", () => {
    const { container } = render(<AccountMetric value={0} label={''} />);
    expect(container.childElementCount).toEqual(0);
});

it("Pass value with {0} and label with {'something'}, should return the component", () => {
    const { container } = render(
        <AccountMetric value={0} label={'something'} />
    );
    expect(container?.firstChild).toHaveClass('account-metric');
});

it("Pass value with negative {-1} and label with {'something'}, should return the component", () => {
    const { container } = render(
        <AccountMetric value={0} label={'something'} />
    );
    expect(container?.firstChild).toHaveClass('account-metric');
});

it("Pass value with big negative {-999999999999} and label with {'something'}, should return the component", () => {
    const { container } = render(
        <AccountMetric value={0} label={'something'} />
    );
    expect(container?.firstChild).toHaveClass('account-metric');
});

it("Pass value with big positive {999999999999} and label with {'something'}, should return the component", () => {
    const { container } = render(
        <AccountMetric value={0} label={'something'} />
    );
    expect(container?.firstChild).toHaveClass('account-metric');
});

it("Pass value with a string {'something'} and label with {'something'}, should return null", () => {
    const { container } = render(
        <AccountMetric value={'something' as any} label={'something'} />
    );
    expect(container.childElementCount).toEqual(0);
});
