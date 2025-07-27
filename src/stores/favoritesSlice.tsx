import type { StateCreator } from "zustand";
import type { RecipeDetails } from "../types/types";
import { notificationSlice, type NotificationSliceType } from "./notificationSlice";

export type FavoriteSliceTypes = {
    favorites: RecipeDetails[],
    handleClickFav: (recipeDetails: RecipeDetails) => void
    favoriteExist: (id: RecipeDetails["idDrink"]) => boolean
    getFavoriteStorage: () => void
}

export const favoriteSlice: StateCreator<FavoriteSliceTypes & NotificationSliceType, [], [], FavoriteSliceTypes> = (set, get, api) => ({
    favorites: [],
    handleClickFav: (recipeDetails) => {
        if (get().favorites.some(fav => fav.idDrink == recipeDetails.idDrink)) {
            set((state) => ({
                ...state,
                favorites: state.favorites.filter(fav => fav.idDrink !== recipeDetails.idDrink)
            }))
            notificationSlice(set, get, api).showNotification({
                message: "Receta Eliminada de Favoritos",
                error: false,
                show: true
            })
        } else {
            set((state) => ({
                ...state,
                favorites: [...state.favorites, recipeDetails]
            }))
            notificationSlice(set, get, api).showNotification({
                message: "Receta Agregada a Favoritos",
                error: false,
                show: true
            })
        }

        localStorage.setItem("favoritos", JSON.stringify(get().favorites))
    },
    favoriteExist: (id) => {
        return (get().favorites.some(fav => fav.idDrink == id))
    },
    getFavoriteStorage: () => {
        const favoriteStorage = localStorage.getItem("favoritos");
        if (favoriteStorage) {
            set((state) => ({
                ...state,
                favorites: JSON.parse(favoriteStorage)
            }))
        }
    }
})