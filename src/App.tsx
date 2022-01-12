import React, { useEffect } from 'react';

import { Header } from './features/Header/Header';
import { Footer } from './features/Footer/Footer';
import { Router } from './router';
import { AppEnvironment } from './config/env/AppEnvironment';

const App: React.FC = () => {

    useEffect(() => {
        //TODO: call any job here
        console.log(AppEnvironment.GetEnvironmentVariable().ENVIROMNENT_NAME);
    }, []);

    return (
        <div className="App">
            <Header />
            <Router />
            <Footer />
        </div>
    );
};

export { App };
