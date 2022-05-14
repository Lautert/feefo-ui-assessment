import React from 'react';
import { IAccountOverview } from './interface';

import AccountContant from 'components/account-contact';
import AccountContribution from 'components/account-contribution';
import './account-overview.scss';

interface IAccountOverviewComponent {
    data: IAccountOverview;
}

const AccountOverview: React.FC<IAccountOverviewComponent> = ({ data }) => {
    return (
        <div className="account-overview">
            <div className="head">
                <div className="title">
                    <span>Account Overview</span>
                </div>
                <AccountContant contact={data.supportContact} />
            </div>
            <AccountContribution contribution={data.salesOverview} />
        </div>
    );
};

export default AccountOverview;
