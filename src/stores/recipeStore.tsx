import type { StateCreator } from "zustand";
import { getCatgories, getRecipeFilter } from "../services/services";
import type { Category, RecipeFilterResponse, Search } from "../types/types";

export type RecipeSliceTypes = {
    categories: Category[]
    fetchCatgories: () => void
    fetchRecipeFilter: (search: Search) => void
    recipeFilterResponse: RecipeFilterResponse[]
}

export const recipeSlice: StateCreator<RecipeSliceTypes> = (set) => ({
    categories: [],
    recipeFilterResponse: [],
    fetchCatgories: async () => {
        const result = await getCatgories();
        set((state) => ({
            ...state,
            categories: result
        }))
    },
    fetchRecipeFilter: async (search) => {
        const result = await getRecipeFilter(search);
        set((state) => ({
            ...state,
            recipeFilterResponse: result
        }))
    }
})