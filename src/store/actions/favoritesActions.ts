import { ActionTypes } from "../constants/action-types"

export const setFavorites = (state: any) => {
    return {
        type: ActionTypes.SET_FAVORITES,
        payload: state,
    }
}

export const addFavorite = (state: any) => {
    return {
        type: ActionTypes.ADD_FAVORITE,
        payload: state,
    }
}

export const removeFavorite = (state: any) => {
    return {
        type: ActionTypes.REMOVE_FAVORITE,
        payload: state,
    }
}