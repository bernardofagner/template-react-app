import { IAppRoutes } from '../';

import { ApplicationRoutes } from '../../common/enums/rotas/ApplicationRoutes';

import { About } from '../../features/About';
import { HomeContainer } from '../../features/Principal/HomeContainer/HomeContainer';

const ApplicatioRoutesObject: IAppRoutes = {
    home: {
        pathRota: ApplicationRoutes.Home,
        component: HomeContainer,
        nome: 'Rota exemplo About',
        public: true,
    },
    about: {
        pathRota: ApplicationRoutes.About,
        component: About,
        nome: 'Rota exemplo About',
        public: true,
    }
};

export { ApplicatioRoutesObject };
