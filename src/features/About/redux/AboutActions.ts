import { ReduxAction, ReduxDataStatus } from "../../../common/types/redux/Redux";

export enum AboutActionsTypes {
    SET_ABOUT_INFO = 'SET_ABOUT_INFO',
    SET_ABOUT_STATUS = 'SET_ABOUT_STATUS',
};

export const AboutActions = {
    setInfoAboutRedux: (infoReduxAbout: string): ReduxAction => ({
        type: AboutActionsTypes.SET_ABOUT_INFO,
        payload: infoReduxAbout
    }),

    setInfoStatusRedux: (status: ReduxDataStatus): ReduxAction => ({
        type: AboutActionsTypes.SET_ABOUT_STATUS,
        payload: status
    })
}