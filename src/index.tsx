import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApplicationRoutes } from './common/enums/rotas/ApplicationRoutes';

import { App } from './App';
import './index.scss';


import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Store } from './config/Store/Store';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter basename={ApplicationRoutes.Home}>
            <Provider store={Store.Store()}>
                <PersistGate loading={<>Loading...</>} persistor={Store.Persistor()}>
                    <App />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);