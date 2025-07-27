import type { Search } from "../types/types";


export async function getCatgories() {
    try {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
        const response = await fetch(url);
        if (response.status !== 200) {
            throw new Error(`HTTPS Error Status ${response.status}`);
        }

        const data = await response.json();
        return data.drinks
    } catch (error) {
        console.log(error);
    }
}

export async function getRecipeFilter(search: Search) {
    try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.category}&i=${search.ingredient}`;
        const response = await fetch(url);
        if (response.status !== 200) {
            throw new Error(`HTPPS Error status ${response.status}`);
        }
        const data = await response.json();
        return data.drinks
    } catch (error) {
        console.log(error)
    }
}