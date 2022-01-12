import React, { useEffect, useState } from 'react';
import { ReduxDataStatus } from '../../common/types/redux/Redux';
import styles from './About.module.scss'

interface IAboutProps {
    infoAbout: string | null,
    infoStatus: ReduxDataStatus,
    setInfoAbout: Function,
    setInfoStatus: Function
}

const About: React.FC<IAboutProps> = ({ infoAbout, infoStatus, setInfoAbout, setInfoStatus }) => {

    const [contador, setContador] = useState<number>(0);
    
    useEffect(() => {
        init();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setInfoAbout('Mensagem inicial ' + contador);

        // eslint-disable-next-line
    }, [contador]);

    const init = () => {
        setInfoAbout('Mensagem inicial');
        setInfoStatus(ReduxDataStatus.Success);
    };

    const mudarValorProp = () => {
        setContador(contador + 1);        
        setInfoStatus(ReduxDataStatus.Success);
    };

    return (
        <div className={styles.container}>
            <h1>
                About
            </h1>

            <button onClick={mudarValorProp}>
                Clique
            </button>

            <p>Contador: {contador} </p>
            <p>Redux Info: {infoAbout} </p>
            <p>Redux status: {infoStatus} </p>
        </div>
    );
};

export { About };