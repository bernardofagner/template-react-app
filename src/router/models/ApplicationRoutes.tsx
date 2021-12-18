import { IAppRoutes } from '../';

import { ApplicationRoutes } from '../../common/enums/rotas/ApplicationRoutes';

import { About } from '../../features/About';
import { Home } from '../../features/Home/Home';

const ApplicatioRoutesObject: IAppRoutes = {
    home: {
        pathRota: ApplicationRoutes.Home,
        component: Home,
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
