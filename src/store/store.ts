import { createStore } from "redux";
import {reducers} from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { composeWithDevTools } from "redux-devtools-extension"

const persistConfig = {
    key: 'favorites',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, {}, composeWithDevTools());
const persistor = persistStore(store);

export {store, persistor};