import React, { ReactElement } from 'react';

import styles from './AppContainer.module.scss';

interface IAppContainerProps {
    titulo: ReactElement;
    breadcrumb?: ReactElement;
    conteudo?: ReactElement;
};

const AppContainer: React.FC<IAppContainerProps> = ({titulo,breadcrumb,conteudo}) => {
    return (
        <div className={styles.container}>
            {titulo}
            {breadcrumb}
            {conteudo}
        </div>
    );
};

export { AppContainer };
