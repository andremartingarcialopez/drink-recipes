import { create } from "zustand";
import { recipeSlice, type RecipeSliceTypes } from "./recipeStore";


export const useAppStore = create<RecipeSliceTypes>((...a) => ({
    ...recipeSlice(...a)
}))