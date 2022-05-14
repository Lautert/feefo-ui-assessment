import { faInfoCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './account-sales.scss';

interface IAccountSalesProps {
    attempts?: number;
    saved?: number;
}

const AccountSales: React.FC<IAccountSalesProps> = ({ attempts, saved }) => {
    return (
        <div className="account-sales">
            <FontAwesomeIcon icon={faInfoCircle} className="info" />
            <div className="title">
                <FontAwesomeIcon icon={faUpload} className="upload" />
                <span>Sales</span>
            </div>
            <div className="message">
                <span>
                    You had <b>{attempts || 0} uploads</b> and{' '}
                    <b>{saved || 0}</b> lines added.
                </span>
            </div>
        </div>
    );
};

export default AccountSales;
