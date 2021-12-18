import React from 'react';
import { AppContainer } from '../../common/components/AppContainer/AppContainer';
import { Titulo } from '../../common/components/Titulo/TItulo';

const Home: React.FC = () => {
    return (
        <AppContainer titulo={<Titulo titulo='HOME'/>} />
    );
};

export { Home };