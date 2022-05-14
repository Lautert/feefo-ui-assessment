import { IAccountContact } from 'components/account-contact/interface';
import { IAccountContribution } from 'components/account-contribution/interface';

export interface IAccountOverview {
    supportContact: IAccountContact;
    salesOverview: IAccountContribution;
}
