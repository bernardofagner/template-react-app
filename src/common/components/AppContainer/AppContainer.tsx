import React, { ReactElement } from 'react';
import styles from './AppContainer.module.scss';

interface IAppContainerProps {
    titulo: ReactElement;
    breadcrumb?: ReactElement;
};

const AppContainer: React.FC<IAppContainerProps> = ({titulo, breadcrumb, children}) => {
    return (
        <div className={styles.container}>
            {titulo}
            {breadcrumb}
            {children}
        </div>
    );
};

export { AppContainer };
