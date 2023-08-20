document.addEventListener("DOMContentLoaded", function () {
    const recipeButton = document.getElementById("recipe-button");
    const recipeOutput = document.getElementById("recipe-output");
    const flavorType = document.getElementById("flavor-type");

    recipeButton.addEventListener("click", function () {
        const selectedFlavor = flavorType.value;

        if (selectedFlavor === "strawberry") {
            recipeOutput.innerHTML = "<h2>Strawberry Crepe Recipe</h2><p>Flour, Milk, Water, Eggs, Butter, Salt, Sugar, Cream Cheese, Lemon Juice, Lemon Zest, Strawberries</p>";
        } else if (selectedFlavor === "savory") {
            recipeOutput.innerHTML = "<h2>Savory Crepe Recipe</h2><p>Flour, Milk, Eggs, Butter, Salt, Gruyere Cheese, Ham, Mushrooms, Spinach, Tomatoes</p>";
        } else if (selectedFlavor === "nutella") {
            recipeOutput.innerHTML = "<h2>Nutella Crepe Recipe</h2><p>Flour, Milk, Water, Eggs, Butter, Salt, Sugar, Strawberries, Bluberries, Blackberries, Nutella</p>";
        } else if (selectedFlavor === "50/50") {
            recipeOutput.innerHTML = "<h2>50/50</h2><p>Your choice of any two crepes. Perfect for when you can't decide between sweet or savory.</p>";
        } else {
            recipeOutput.innerHTML = "<p>Please select a flavor to get the recipe.</p>";
        }
    });
});
