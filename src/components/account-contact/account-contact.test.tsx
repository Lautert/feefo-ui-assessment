import { cleanup, render } from '@testing-library/react';
import AccountContact from './index';
import { IAccountContact } from './interface';

afterEach(cleanup);

it("Pass all contact params with {''} value, should return null", () => {
    const contact: IAccountContact = {
        name: '',
        email: '',
        phone: '',
        photo: ''
    };

    const { container } = render(<AccountContact contact={contact} />);
    expect(container.childElementCount).toEqual(0);
});

it("Pass all contact params with {''} value except name, should return null", () => {
    const contact: IAccountContact = {
        name: 'Jonh Smith',
        email: '',
        phone: '',
        photo: ''
    };

    const { container } = render(<AccountContact contact={contact} />);
    expect(container.childElementCount).toEqual(0);
});

it('Pass name and email with value but without phone and photo, should return the component', () => {
    const contact: IAccountContact = {
        name: 'Jonh Smith',
        email: 'mail'
    };

    const { container } = render(<AccountContact contact={contact} />);
    expect(container?.firstChild).toHaveClass('account-contact');
});

it('Pass name, email, phone with value but without photo, should return the component', () => {
    const contact: IAccountContact = {
        name: 'Jonh Smith',
        email: 'mail',
        phone: '+44 (0)20 7123 4567'
    };

    const { container } = render(<AccountContact contact={contact} />);
    expect(container?.firstChild).toHaveClass('account-contact');

    // ... test if the phone number is rendered
    // ... test if the image render with background color and first name letter
});

it('Pass name, email, phone with value but without photo, should return the component', () => {
    const contact: IAccountContact = {
        name: 'Jonh Smith',
        email: 'mail',
        phone: '+44 (0)20 7123 4567',
        photo: 'https://media-exp1.licdn.com/dms/image/C4D03AQFsWPAAur-Pgg/profile-displayphoto-shrink_100_100/0/1629901132494?e=1657756800&v=beta&t=CpSyuK6PoetYfBfNYWpuXBpTC6vNVE4n4phwLHStLjQ'
    };

    const { container } = render(<AccountContact contact={contact} />);
    expect(container?.firstChild).toHaveClass('account-contact');

    // ... test if the image render with background img without first name letter
});

// ... need learn how to test with mobile resolution
