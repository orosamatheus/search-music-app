import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";

export const reducers = combineReducers({
    Favorites : favoritesReducer,
})

export type RootState = ReturnType<typeof reducers>
