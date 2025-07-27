import type { StateCreator } from "zustand";
import { getCatgories, getRecipeDetails, getRecipeFilter } from "../services/services";
import type { Category, RecipeDetails, RecipeFilterResponse, Search } from "../types/types";

export type RecipeSliceTypes = {
    categories: Category[],
    recipeDetails: RecipeDetails,
    modal: boolean
    fetchCatgories: () => void
    fetchRecipeFilter: (search: Search) => void
    recipeFilterResponse: RecipeFilterResponse[]
    fetchRecipeDetails: (id: RecipeFilterResponse["idDrink"]) => void
}

export const recipeSlice: StateCreator<RecipeSliceTypes> = (set) => ({
    categories: [],
    recipeFilterResponse: [],
    recipeDetails: {} as RecipeDetails,
    modal: false,
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
    },
    fetchRecipeDetails: async (id) => {
        const result = await getRecipeDetails(id);
        set((state) => ({
            ...state,
            recipeDetails: result,
            modal: true
        }))
    }
})