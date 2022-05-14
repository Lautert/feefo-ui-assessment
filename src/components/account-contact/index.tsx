import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { IAccountContact } from './interface';

import './account-contact.scss';

interface IAccountContantComponent {
    contact: IAccountContact;
    // eslint-disable-next-line react/require-default-props
    bgColor?: string;
}

const AccountContant: React.FC<IAccountContantComponent> = ({
    contact,
    bgColor = '#fece38'
}) => {
    if (contact.name.length === 0 || contact.email.length === 0) {
        return null;
    }

    const sigle = contact.name.substring(0, 1);

    return (
        <div className="account-contact">
            <div className="title">
                <span>your feefo support contant</span>
            </div>
            <div className="body">
                <div className="container-left">
                    <div
                        className="img"
                        style={{
                            backgroundImage: !contact.photo
                                ? ''
                                : `url(${contact.photo})`,
                            backgroundColor: bgColor
                        }}
                    >
                        {!contact.photo ? sigle : null}
                    </div>
                </div>
                <div className="container-right">
                    <div className="name">
                        <span>{contact.name}</span>
                    </div>
                    <div className="contact">
                        <span>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="envelope"
                            />
                            {contact.email}
                        </span>
                        <span>{contact.phone}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountContant;
