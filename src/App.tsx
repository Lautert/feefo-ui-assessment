import React from 'react';
import './App.scss';
import AccountOverview from 'modules/account-overview';

const App: React.FC = () => {
    const accountOverviewStub = {
        supportContact: {
            name: 'John Smith',
            email: 'john.smith@feefo.com',
            phone: '+44 (0)20 7123 4567'
            // photo: 'https://media-exp1.licdn.com/dms/image/C4D03AQFsWPAAur-Pgg/profile-displayphoto-shrink_100_100/0/1629901132494?e=1657756800&v=beta&t=CpSyuK6PoetYfBfNYWpuXBpTC6vNVE4n4phwLHStLjQ'
        },
        salesOverview: {
            uploads: 8,
            successfulUploads: 3,
            linesAttempted: 20,
            linesSaved: 4,
            lastUploadDate: 1605001226079
        }
    };

    return (
        <div className="App">
            <AccountOverview data={accountOverviewStub} />
        </div>
    );
};

export default App;
