import RecipeCard from "../components/RecipeCard";
import { useAppStore } from "../stores/useAppStore"

export default function IndexPage() {

    const { recipeFilterResponse } = useAppStore();

    return (
        <div>
            <h1 className="text-3xl my-5 font-bold text-gray-800">Recetas</h1>

            {recipeFilterResponse.length ?
                <>
                    {recipeFilterResponse.map((recipe) =>
                        <RecipeCard key={recipe.idDrink} recipe={recipe} />)}
                </>
                :
                <p className="text-center my-2 text-gray-800 font-light text-lg">Comienza buscando una receta</p>
            }
        </div>
    )
}
