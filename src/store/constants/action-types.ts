export const ActionTypes = {
    ADD_FAVORITE: "ADD_FAVORITE",
    REMOVE_FAVORITE: "REMOVE_FAVORITE",
    SET_FAVORITES: "SET_FAVORITES"
}

export interface IFavoriteProps{
    id?: number;
    title?: string;
    link?: string;
    duration?: number;
    preview?: string;
    artist?: {
        name: string;
    }
    album?:{
        cover_medium: string;
    }
}