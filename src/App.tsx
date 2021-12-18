import React, { useEffect } from 'react';

import { Header } from './features/Header/Header';
import { Footer } from './features/Footer/Footer';
import { Router } from './router';

const App: React.FC = () => {

    useEffect(() => {
        //TODO: call any job here
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
