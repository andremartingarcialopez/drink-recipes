import { create } from "zustand";
import { recipeSlice, type RecipeSliceTypes } from "./recipeStore";
import { devtools } from "zustand/middleware";
import { favoriteSlice, type FavoriteSliceTypes } from "./favoritesSlice";
import { notificationSlice, type NotificationSliceType } from "./notificationSlice";

/*Nuestro store principal que se ecncarga de estar contectado con los slices*/
export const useAppStore = create<RecipeSliceTypes & FavoriteSliceTypes & NotificationSliceType>()(
    devtools((...a) => ({
        ...recipeSlice(...a),
        ...favoriteSlice(...a),
        ...notificationSlice(...a)
    })
    )
)