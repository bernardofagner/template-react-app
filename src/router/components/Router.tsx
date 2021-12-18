import ScrollToTop from './ScrollToTop';
import { Routes, Route } from 'react-router-dom';
import { ApplicatioRoutesObject } from '../';

const Router: React.FC = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
            {Object.values(ApplicatioRoutesObject).map((route) => (
                        <Route key={route.nome} path={route.pathRota} element={<route.component />} />
                    )
                )
            }
            </Routes>
        </>
    );
};

export { Router };