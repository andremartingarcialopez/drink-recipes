import type { StateCreator } from "zustand";

export type RecipeSliceTypes = {
    categories: []
}

export const recipeSlice: StateCreator<RecipeSliceTypes> = () => ({
    categories: []
})