const API_KEY = '6ee2db47c3c24dc4ac1b3461a024d8f7';
const recipeListEl = document.getElementById('recipe-list');

function displayRecipes(recipes) {
    recipeListEl.innerHTML = "";
    recipes.array.forEach((recipe) => {
        const recipeItemEl = document.createElement("li");
        recipeItemEl.className.add("recipe-item");

        recipeListEl.appendChild(recipeItemEl);
        recipeImageEl = document.createElement("img");
        recipeImageEl.src= recipe.image;
        recipeImageEl.alt= "recipe image";

        recipleTitleEl = document.createElement("h2");
        recipeTitleEl.innerHTML = recipe.title;
        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeListEl.appendChild(recipeItemEl);
        
    });
}

async function getRecipes(){
    const response = await fetch(`https://api.spoonacular.com/recipes/
    random?number=10&apiKey=6ee2db47c3c24dc4ac1`);

    const data = await response.json();

    return data.recipes;
}