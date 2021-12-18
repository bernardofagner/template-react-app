import { AboutActionsTypes, AboutReducer, AboutState, setInfoAboutRedux, setInfoStatusRedux } from './';
import { ReduxAction, ReduxDataStatus } from '../../../common/types/redux/Redux';
import { AboutActions } from './AboutActions';
import { Dispatch } from 'redux';

describe('AboutRedux', () => {
    describe('About Actions', () => {
        test('Deve criar o objeto do tipo ReduxAction com sucesso, com o payload info-redux', () => {
            //Arrange
            const infoRedux: string = 'info-redux';

            //Act
            const resultado = AboutActions.setInfoAboutRedux(infoRedux);

            //Assert
            expect(resultado.type).toEqual(AboutActionsTypes.SET_ABOUT_INFO);
            expect(resultado.payload).toEqual(infoRedux);
        });

        test('Deve criar o objeto do tipo ReduxAction com sucesso, com o payload ReduxDataStatus.Success', () => {
            //Arrange
            const reduxStatus: ReduxDataStatus = ReduxDataStatus.Success;

            //Act
            const resultado = AboutActions.setInfoStatusRedux(reduxStatus);

            //Assert
            expect(resultado.type).toEqual(AboutActionsTypes.SET_ABOUT_STATUS);
            expect(resultado.payload).toEqual(reduxStatus);
        });
    });

    describe('About Operations', () => {
        test('Deve chamar o dispatch 1 vez, na action setInfoAboutRedux', () => {
            //Arrange
            const infoRedux: string = 'info-redux-teste';
            const dispatch: Dispatch = jest.fn();

            //Act
            const dispatchOperation = setInfoAboutRedux(infoRedux);
            dispatchOperation(dispatch);

            //Assert
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith(AboutActions.setInfoAboutRedux(infoRedux));
        });

        test('Deve chamar o dispatch 1 vez, na action setInfoStatusRedux', () => {
            //Arrange
            const infoStatusRedux: ReduxDataStatus = ReduxDataStatus.Success;
            const dispatch: Dispatch = jest.fn();

            //Act
            const dispatchResult = setInfoStatusRedux(infoStatusRedux);
            dispatchResult(dispatch);

            //Assert
            expect(dispatch).toHaveBeenCalledTimes(1);
            expect(dispatch).toHaveBeenCalledWith(AboutActions.setInfoStatusRedux(infoStatusRedux));
        });
    });

    describe('About Reducer', () => {
        test('Deve retornar o state correspondente à action type: SET_ABOUT_INFO', () => {
            //Arrange
            const estadoAnterior: AboutState = {
                infoAboutRedux: 'dado-anterior',
                infoStatusRedux: ReduxDataStatus.Null
            };

            const reduxAction: ReduxAction = {
                type: AboutActionsTypes.SET_ABOUT_INFO,
                payload: 'payloadInfo'
            };

            const estadoEsperado: AboutState = {
                infoAboutRedux: 'payloadInfo',
                infoStatusRedux: ReduxDataStatus.Null
            };
            
            //Act
            const resultado = AboutReducer(estadoAnterior, reduxAction);

            //Assert
            expect(resultado).toEqual(estadoEsperado);
        });

        test('Deve retornar o state correspondente à action type: SET_ABOUT_STATUS', () => {
            //Arrange
            const estadoAnterior: AboutState = {
                infoAboutRedux: null,
                infoStatusRedux: ReduxDataStatus.Null
            };

            const reduxAction: ReduxAction = {
                type: AboutActionsTypes.SET_ABOUT_STATUS,
                payload: ReduxDataStatus.Success
            };

            const estadoEsperado: AboutState = {
                infoAboutRedux: null,
                infoStatusRedux: ReduxDataStatus.Success
            };
            
            //Act
            const resultado = AboutReducer(estadoAnterior, reduxAction);

            //Assert
            expect(resultado).toEqual(estadoEsperado);
        });

        test('Deve retornar o state sem alteração, AboutActionsTypes não mapeada.', () => {
            //Arrange
            const estadoInicial: AboutState = {
                infoAboutRedux: 'info redux',
                infoStatusRedux: ReduxDataStatus.Error
                
            };

            const reduxAction: ReduxAction = {
                type: 'ACTION_NAO_MAPEADA' as AboutActionsTypes.SET_ABOUT_STATUS,
                payload: ReduxDataStatus.Success
            };
            
            //Act
            const resultado = AboutReducer(estadoInicial, reduxAction);

            //Assert
            expect(resultado).toEqual(estadoInicial);
        });

        test('Deve retornar o state inicial, parametro state não informado no reducer.', () => {
            //Arrange
            const estadoInicial: AboutState = {
                infoAboutRedux: null,
                infoStatusRedux: ReduxDataStatus.Null
                
            };

            const reduxAction: ReduxAction = {
                type: 'ACTION_NAO_MAPEADA' as AboutActionsTypes,
                payload: ReduxDataStatus.NoContent
            };
            
            //Act
            const resultado = AboutReducer(undefined, reduxAction);

            //Assert
            expect(resultado).toEqual(estadoInicial);
        });
    });
});