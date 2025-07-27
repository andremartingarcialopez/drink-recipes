import RecipeCard from "../components/RecipeCard";
import { useAppStore } from "../stores/useAppStore"

export default function FavoritesPage() {

  const { favorites, } = useAppStore();

  return (
    <div>
      <h1 className="text-3xl my-5 font-bold text-gray-800 mx-2">Mis Favoritos</h1>
      {favorites.length ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {favorites.map((favorite) =>
            <RecipeCard key={favorite.idDrink} recipe={favorite} />)}
        </div>
        :
        <p className="my-2 text-center text-gray-800 font-light text-lg">Sin Favoritos por el momento</p>
      }
    </div>
  )
}
