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
    if (!contribution.uploads || contribution.uploads === 0) {
        return null;
    }

    if (!contribution.linesAttempted || contribution.linesAttempted === 0) {
        return null;
    }

    const uploadSuccess = (
        (contribution.successfulUploads / contribution.uploads) *
        100
    ).toFixed(0);

    const linesSaved = (
        (contribution.linesSaved / contribution.linesAttempted) *
        100
    ).toFixed(0);

    const metrics: IAccountMetricComponent[] = [
        {
            value: Number.parseInt(uploadSuccess),
            label: 'upload success',
            className: 'upload'
        },
        {
            value: Number.parseInt(linesSaved),
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
