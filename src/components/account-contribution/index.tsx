import React from 'react';

import AccountMetric, {
    IAccountMetricComponent
} from 'components/account-metric';
import AccountSales from 'components/account-sales';
import './account-contribution.scss';
import { IAccountContribution } from './interface';

interface IAccountContributionComponent {
    contribution: IAccountContribution;
}

const AccountContribution: React.FC<IAccountContributionComponent> = ({
    contribution
}) => {
    const uploadSuccess = 0;
    const linesSaved = 0;

    const metrics: IAccountMetricComponent[] = [
        {
            value: uploadSuccess,
            label: 'upload success',
            className: 'upload'
        },
        {
            value: linesSaved,
            label: 'lines saved',
            className: 'saves'
        }
    ];

    return (
        <div className="account-contribution">
            <AccountSales
                attempts={contribution.linesAttempted}
                saved={contribution.linesSaved}
            />
            <div className="body">
                {metrics.map((metric) => (
                    <AccountMetric
                        value={metric.value}
                        label={metric.label}
                        className={metric.className}
                        key={`metric-${metric.className}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AccountContribution;
