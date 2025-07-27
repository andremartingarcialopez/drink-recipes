import { create } from "zustand";
import { recipeSlice, type RecipeSliceTypes } from "./recipeStore";
import { devtools } from "zustand/middleware";
import { favoriteSlice, type FavoriteSliceTypes } from "./favoritesSlice";


export const useAppStore = create<RecipeSliceTypes & FavoriteSliceTypes>()(
    devtools((...a) => ({
        ...recipeSlice(...a),
        ...favoriteSlice(...a)
    })
    )
)