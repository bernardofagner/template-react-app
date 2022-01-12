import React from 'react';
import styles from './HomeContainer.module.scss';

import { AppContainer } from '../../../common/components/AppContainer/AppContainer';
import { Titulo } from '../../../common/components/Titulo/TItulo';
import { Home } from './Home/Home';
import { Breadcrumb, ILinkProps } from '../../../common/components/Breadcrumb/Breadcrumb';
import { ApplicationRoutes } from '../../../common/enums/rotas/ApplicationRoutes';


const HomeContainer: React.FC = () => {

    const links: Array<ILinkProps> = [
        {
            titulo: 'HOME',
            href: ApplicationRoutes.Home
        }
    ];
    return (
        <AppContainer
            titulo={<Titulo titulo='HOME' />}
            // breadcrumb={<Breadcrumb links={links} />}
            children={<Home />} />
    );
};

export { HomeContainer as HomeContainer };