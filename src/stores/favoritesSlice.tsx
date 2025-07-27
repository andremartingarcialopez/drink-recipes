import type { StateCreator } from "zustand";
import type { RecipeDetails } from "../types/types";

export type FavoriteSliceTypes = {
    favorites: RecipeDetails[]
}

export const favoriteSlice : StateCreator<FavoriteSliceTypes> = () => ({
    favorites: []
})