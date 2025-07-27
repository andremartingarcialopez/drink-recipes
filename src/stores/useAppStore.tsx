import { create } from "zustand";
import { recipeSlice, type RecipeSliceTypes } from "./recipeStore";
import { devtools } from "zustand/middleware";
import { favoriteSlice, type FavoriteSliceTypes } from "./favoritesSlice";
import { notificationSlice, type NotificationSliceType } from "./notificationSlice";


export const useAppStore = create<RecipeSliceTypes & FavoriteSliceTypes & NotificationSliceType>()(
    devtools((...a) => ({
        ...recipeSlice(...a),
        ...favoriteSlice(...a),
        ...notificationSlice(...a)
    })
    )
)