import React from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Breadcrumb.module.scss';

import separadorSubmenuImg from '../../../assets/icons/separador-submenu.svg';
import { ApplicationRoutes } from '../../enums/rotas/ApplicationRoutes';

export interface ILinkProps {
    titulo: string;
    href: ApplicationRoutes;
}

interface IBreadcrumbProps {
    links: Array<ILinkProps>;
}

const Breadcrumb: React.FC<IBreadcrumbProps> = ({ links }) => {
    const navigate = useNavigate();

    const gerenciarRoteamento = (rota: ApplicationRoutes) => {
        navigate(rota.toString());
    };

    return (
        <nav className={styles.navegacao}>
            <ul className={styles.breadcrumb}>
                {links.map((link: ILinkProps) => {
                    if (link.href !== ApplicationRoutes.NaoDefinido) {
                        return (
                            <li
                                key={link.titulo}
                                className={styles.link}
                                onClick={() => gerenciarRoteamento(link.href)}
                            >
                                {link.titulo}
                                <img
                                    src={separadorSubmenuImg}
                                    alt="Separador do Submenu"
                                />
                            </li>
                        )
                    }
                    else {
                        return (
                            <li
                                key={link.titulo}
                                className={styles.link}
                            >
                                {link.titulo}
                                <img
                                    src={separadorSubmenuImg}
                                    alt="Separador do Submenu"
                                />
                            </li>
                        )
                    }
                    return (
                        <li
                            key={link.titulo}
                            className={styles.link}
                            onClick={() => gerenciarRoteamento(link.href)}
                        >
                            {link.titulo}
                            <img
                                src={separadorSubmenuImg}
                                alt="Separador do Submenu"
                            />
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
};

export { Breadcrumb };