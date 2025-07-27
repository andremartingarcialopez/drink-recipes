
export type Category = {
    strCategory: string
}

export type Search = {
    ingredient: "",
    category: ""
}

export type RecipeFilterResponse = {
    idDrink: string,
    strDrink: string,
    strDrinkThumb: string
}

export type RecipeDetails = {
    idDrink: string,
    strDrink: string,
    strDrinkThumb: string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
    strIngredient5: string,
    strIngredient6: string,
    strIngredient7: string,
    strIngredient8: string,
    strIngredient9: string,
    strIngredient10: string,
    strInstructions: string,
    strMeasure1: string,
    strMeasure2: string,
    strMeasure3: string,
    strMeasure4: string,
    strMeasure5: string,
    strMeasure6: string,
    strMeasure7: string,
    strMeasure8: string,
    strMeasure9: string,
    strMeasure10: string,
}

export type Notification = {
    message: string,
    error: boolean,
    show: boolean
}