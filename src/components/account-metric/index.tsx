/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import './account-metric.scss';

export interface IAccountMetricComponent
    extends React.HTMLAttributes<HTMLDivElement> {
    value: number;
    label: string;
}

const AccountMetric: React.FC<IAccountMetricComponent> = ({
    value,
    label,
    ...props
}) => {
    if (label.length === 0) {
        return null;
    }

    if (typeof value !== 'number') {
        return null;
    }

    return (
        <div {...props} className={`account-metric ${props.className}`}>
            <span className="percentage">{value}%</span>
            <span>{label}</span>
        </div>
    );
};

export default AccountMetric;
