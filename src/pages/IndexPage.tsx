import RecipeCard from "../components/RecipeCard";
import { useAppStore } from "../stores/useAppStore"

export default function IndexPage() {

    const { recipeFilterResponse } = useAppStore();

    return (
        <div>
            <h1 className="text-3xl my-5 font-bold text-gray-800 mx-2">Recetas</h1>
            {recipeFilterResponse.length ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {recipeFilterResponse.map((recipe) =>
                        <RecipeCard key={recipe.idDrink} recipe={recipe} />)}
                </div>
                :
                <p className="my-2 text-center text-gray-800 font-light text-lg">Comienza buscando una receta</p>
            }
        </div>
    )
}
