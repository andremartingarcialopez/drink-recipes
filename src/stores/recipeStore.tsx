import type { StateCreator } from "zustand";
import { getCatgories } from "../services/services";
import type { Category } from "../types/types";

export type RecipeSliceTypes = {
    categories: Category[]
    fetchCatgories: () => void
}

export const recipeSlice: StateCreator<RecipeSliceTypes> = (set) => ({
    categories: [],
    fetchCatgories: async () => {
        const result = await getCatgories();
        set((state) => ({
            ...state,
            categories: result
        }))
    }
})