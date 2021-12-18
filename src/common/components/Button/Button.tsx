import React from 'react';

import styles from './Button.module.scss';

interface IButtonProps { 
    classe: string;
    texto: string;
    acao: () => void;
    habilitado?: boolean;
};

const Button: React.FC<IButtonProps> = ({classe, texto, acao, habilitado}) => {

    const classeBotao = styles[`${classe}`];
    return (
        <button 
            className={`${styles.button} ${classeBotao} ${habilitado ? styles.desabilitado : ''}`} 
            type='button'
            onClick={acao}
        >
            {texto}
        </button>
    );
};

export { Button };