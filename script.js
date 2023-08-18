document.addEventListener("DOMContentLoaded", function () {
    const recipeButton = document.getElementById("recipe-button");
    const recipeOutput = document.getElementById("recipe-output");
    const flavorType = document.getElementById("flavor-type");

    recipeButton.addEventListener("click", function () {
        const selectedFlavor = flavorType.value;

        if (selectedFlavor === "sweet") {
            recipeOutput.innerHTML = "<h2>Sweet Crepe Recipe</h2><p>Instructions for making delicious Nutella crepes...</p>";
        } else if (selectedFlavor === "savory") {
            recipeOutput.innerHTML = "<h2>Savory Crepe Recipe</h2><p>Instructions for making scrumptious strawberry-filled crepes...</p>";
        } else {
            recipeOutput.innerHTML = "<p>Please select a flavor to get the recipe.</p>";
        }
    });
});
