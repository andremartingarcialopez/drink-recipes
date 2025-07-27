import type { RecipeFilterResponse } from "../types/types"

type RecipeCardProps = {
    recipe: RecipeFilterResponse
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    return (
        <div>
            {recipe.strDrink}
        </div>
    )
}
