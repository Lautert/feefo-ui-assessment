import { cleanup, render } from '@testing-library/react';
import AccountContribution from './index';
import { IAccountContribution } from './interface';

afterEach(cleanup);

it('Pass contribution with empty object, should return null', () => {
    const contribution: IAccountContribution = {} as any;

    const { container } = render(
        <AccountContribution contribution={contribution} />
    );
    expect(container.childElementCount).toEqual(0);
});

it("Pass all contribution params with {''} value, should return null", () => {
    const contribution: IAccountContribution = {
        uploads: '',
        successfulUploads: '',
        linesAttempted: '',
        linesSaved: '',
        lastUploadDate: ''
    } as any;

    const { container } = render(
        <AccountContribution contribution={contribution} />
    );
    expect(container.childElementCount).toEqual(0);
});

it('Pass all contribution params with {0} value, should return null', () => {
    const contribution: IAccountContribution = {
        uploads: 0,
        successfulUploads: 0,
        linesAttempted: 0,
        linesSaved: 0,
        lastUploadDate: 0
    } as any;

    const { container } = render(
        <AccountContribution contribution={contribution} />
    );
    expect(container.childElementCount).toEqual(0);
});

it('Pass all contribution params with negative {-1} value, should return the component', () => {
    const contribution: IAccountContribution = {
        uploads: -1,
        successfulUploads: -1,
        linesAttempted: -1,
        linesSaved: -1,
        lastUploadDate: -1
    } as any;

    const { container } = render(
        <AccountContribution contribution={contribution} />
    );
    expect(container?.firstChild).toHaveClass('account-contribution');
});

it('Pass all contribution params with big negative {-9999999999} value, should return the component', () => {
    const contribution: IAccountContribution = {
        uploads: -9999999999,
        successfulUploads: -9999999999,
        linesAttempted: -9999999999,
        linesSaved: -9999999999,
        lastUploadDate: -9999999999
    } as any;

    const { container } = render(
        <AccountContribution contribution={contribution} />
    );
    expect(container?.firstChild).toHaveClass('account-contribution');
});

it('Pass all contribution params with big positive {9999999999} value, should return the component', () => {
    const contribution: IAccountContribution = {
        uploads: 9999999999,
        successfulUploads: 9999999999,
        linesAttempted: 9999999999,
        linesSaved: 9999999999,
        lastUploadDate: 9999999999
    } as any;

    const { container } = render(
        <AccountContribution contribution={contribution} />
    );
    expect(container?.firstChild).toHaveClass('account-contribution');
});

// need learn how to inpect the component and test the percentage value
