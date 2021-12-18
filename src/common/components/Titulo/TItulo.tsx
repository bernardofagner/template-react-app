import React from 'react';

import styles from './Titulo.module.scss';

interface ITituloProps {
    titulo:string;
}

const Titulo: React.FC<ITituloProps> = ({titulo}) => {
    return (
        <div className={styles.containerTitulo}>
            <h1 className={styles.titulo}>{titulo}</h1>
        </div>
    );
};

export { Titulo };