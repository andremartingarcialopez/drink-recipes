import type { StateCreator } from "zustand";
import type { RecipeDetails } from "../types/types";

export type FavoriteSliceTypes = {
    favorites: RecipeDetails[],
    handleClickFav: (recipeDetails: RecipeDetails) => void
    favoriteExist: (id: RecipeDetails["idDrink"]) => boolean
    getFavoriteStorage: () => void
}

export const favoriteSlice: StateCreator<FavoriteSliceTypes> = (set, get) => ({
    favorites: [],
    handleClickFav: (recipeDetails) => {
        if (get().favorites.some(fav => fav.idDrink == recipeDetails.idDrink)) {
            set((state) => ({
                ...state,
                favorites: state.favorites.filter(fav => fav.idDrink !== recipeDetails.idDrink)
            }))
        } else {
            set((state) => ({
                ...state,
                favorites: [...state.favorites, recipeDetails]
            }))
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