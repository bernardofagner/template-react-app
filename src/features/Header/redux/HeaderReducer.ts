import { ReduxAction, ReduxDataStatus } from "../../../common/types/redux/Redux";

interface IHeaderState {

};

const estadoInicial: IHeaderState = {

};

export const HeaderReducer = (state: IHeaderState = estadoInicial, { type, payload }: ReduxAction): IHeaderState => {
    switch(type) {
        default: {
            return state;
        }            
    }
};