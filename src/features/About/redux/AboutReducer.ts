import { AboutActionsTypes } from "./AboutActions";
import { ReduxAction, ReduxDataStatus } from "../../../common/types/redux/Redux";

export interface AboutState {
    infoAboutRedux: string | null,
    infoStatusRedux: ReduxDataStatus,
};

const estadoInicial: AboutState = {
    infoAboutRedux: null,
    infoStatusRedux: ReduxDataStatus.Null
};

export const AboutReducer = (state: AboutState = estadoInicial, { type, payload }: ReduxAction): AboutState => {

    switch(type) {
        case AboutActionsTypes.SET_ABOUT_INFO: {
            return { ...state, infoAboutRedux: payload };
        }        
        case AboutActionsTypes.SET_ABOUT_STATUS: {
            return { ...state, infoStatusRedux: payload };
        }
        default: {
            return state;
        }            
    }
};