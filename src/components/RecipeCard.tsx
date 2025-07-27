import { useAppStore } from "../stores/useAppStore"
import type { RecipeFilterResponse } from "../types/types"

type RecipeCardProps = {
    recipe: RecipeFilterResponse
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
    const {fetchRecipeDetails} = useAppStore()
    return (
        <div className="p-5 bg-white shadow-2xl rounded-lg ">
            <div className="rounded-lg overflow-hidden">
                <img className="rounded hover:rotate-3 hover:scale-125 hover:transition-transform" src={recipe.strDrinkThumb} alt={`Imagen de ${recipe.idDrink}`} />
            </div>

            <div>
                <h2 className="p-2 text-2xl font-bold text-gray-900 truncate">{recipe.strDrink}</h2>
                <button className="text-center w-full bg-yellow-400 hover:bg-yellow-600 p-2 rounded-lg text-white hover:font-semibold uppercase cursor-pointer active:bg-yellow-400" 
                type="button"
                onClick={() => fetchRecipeDetails(recipe.idDrink)}
                >Ver Receta</button>
            </div>
        </div>
    )
}
