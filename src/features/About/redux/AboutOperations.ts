import { AboutActions } from './AboutActions';
import { Dispatch } from 'redux';
import { ReduxDataStatus } from '../../../common/types/redux/Redux';

export const setInfoAboutRedux = (infoReduxAbout: string) => (dispatch: Dispatch) => {
    dispatch(AboutActions.setInfoAboutRedux(infoReduxAbout));
};

export const setInfoStatusRedux = (status: ReduxDataStatus) => (dispatch: Dispatch) => {
    dispatch(AboutActions.setInfoStatusRedux(status));
};