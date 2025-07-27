import { create } from "zustand";
import { recipeSlice, type RecipeSliceTypes } from "./recipeStore";
import { devtools } from "zustand/middleware";


export const useAppStore = create<RecipeSliceTypes>()(
    devtools((...a) => ({
        ...recipeSlice(...a)
    })
    )
)