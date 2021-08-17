import { ActionTypes } from "../constants/action-types"


const initialState = {
    favorites: []
}


export const favoritesReducer = (state = initialState, action: any) => {
    switch(action.type){
        case ActionTypes.SET_FAVORITES:
            return state;

        case ActionTypes.ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, action.payload] 
            };
        case ActionTypes.REMOVE_FAVORITE:
            return {
                favorites: [
                    ...state.favorites.filter((favorite: any) => favorite.id !== action.payload.id)
                ]
            }

        default:
            return state;
    }
}
