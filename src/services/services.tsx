

export async function getCatgories() {
    try {
        const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
        const response = await fetch(url);
        console.log(response);
        if (response.status !== 200) {
            throw new Error(`HTTPS Error Status ${response.status}`);
        }

        const data = await response.json();
        return data.drinks
    } catch (error) {
        console.log(error);
    }
}