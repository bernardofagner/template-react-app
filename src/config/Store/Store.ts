import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistReducer, persistStore, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { ReduxAction } from '../../common/types/redux/Redux';

import { AboutReducer } from '../../features/About/redux';

class Store {
    
    private store: any;
    private persistor: Persistor;

    constructor() {

        const aboutPersistConfig = { key: 'about', storage };

        const appReducers = combineReducers({
            about: persistReducer(aboutPersistConfig, AboutReducer)
        });

        const rootReducer = (state: any, action: any) => {
            if (action.type === 'STORE_CLEAR') {
                state = undefined;
            };

            return appReducers(state, action);
        };

        this.store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
        this.persistor = persistStore(this.store);
    }

    public Store() {
        return this.store;
    }

    public State() {
        return this.store.getState();
    }

    public Dispatch(action: ReduxAction): void {
        this.store.dispatch(action);
    }

    public Persistor(): Persistor {
        return this.persistor;
    }
}

const instance = new Store();
export { instance as Store };
