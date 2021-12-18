import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Header.module.scss';

import { ApplicationRoutes } from '../../common/enums/rotas/ApplicationRoutes';

const Header: React.FC = () => {

    const navigate = useNavigate();

    const handleNavigate = (rota: ApplicationRoutes): void => {
        navigate(rota.toString());
    };
   
    return (
        <header className={styles['container']}>
            <h1>Main Menu</h1>
        </header>
    );
};

export { Header };