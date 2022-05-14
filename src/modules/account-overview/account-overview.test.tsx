import { cleanup, render } from '@testing-library/react';
import AccountOverview from './index';
import { IAccountContact } from 'components/account-contact/interface';
import { IAccountContribution } from 'components/account-contribution/interface';
import { IAccountOverview } from './interface';

afterEach(cleanup);

// need learn how to test compose component

it('Should render the component', () => {
    const data: IAccountOverview = {
        supportContact: {
            name: 'John Smith',
            email: 'john.smith@feefo.com',
            phone: '+44 (0)20 7123 4567'
        },
        salesOverview: {
            uploads: 0,
            successfulUploads: 0,
            linesAttempted: 0,
            linesSaved: 0,
            lastUploadDate: 0
        }
    };

    const { container } = render(<AccountOverview data={data} />);
    expect(container?.firstChild).toHaveClass('account-overview');
});
