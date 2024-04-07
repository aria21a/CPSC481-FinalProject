let quantity = 1;
const quantityInput = document.getElementById("quantity");
const decreaseButton = document.getElementById("decrease-btn");
const increaseButton = document.getElementById("increase-btn");
const checkboxes = document.querySelectorAll(
    '.checkbox input[type="checkbox"]'
);
const nextButton = document.getElementById("next-btn");
const previousButton = document.getElementById("prev-btn");

function updateButtonsState() {
    decreaseButton.disabled = quantity == 0.25;
    increaseButton.disabled = quantity == 10;
}

decreaseButton.addEventListener("click", () => {
    if (quantity > 1) quantity--;
    else if (quantity == 1) quantity = 0.5;
    else if (quantity == 0.5) quantity = 0.25;
    quantityInput.value = quantity;
    updateButtonsState();
    updateIngredientQuantities();
});

increaseButton.addEventListener("click", () => {
    if (quantity == 0.25) quantity = 0.5;
    else if (quantity == 0.5) quantity = 1;
    else if (quantity < 10) quantity++;
    quantityInput.value = quantity;
    updateButtonsState();
    updateIngredientQuantities();
});

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", checkCheckboxes);
});

function checkCheckboxes() {
    let allChecked = true;
    checkboxes.forEach((checkbox) => {
        if (!checkbox.checked) {
            allChecked = false;
        }
    });
    nextButton.disabled = !allChecked;
}

nextButton.addEventListener("click", () => {
    window.location.href = "chocolateChipRecipe.html";
});

previousButton.addEventListener("click", () => {
    window.location.href = "mainscreen.html";
});

function updateIngredientQuantities() {
    const ingredientQuantities = [
        1, // salted butter
        1, // granulated sugar
        1, // light brown sugar
        2, // pure vanilla extract
        2, // large eggs
        3, // all-purpose flour
        1, // baking soda
        0.5, // baking powder
        1, // sea salt
        2, // chocolate chips
    ];

    const ingredients = document.querySelectorAll(".checkbox");
    ingredients.forEach((ingredient, index) => {
        const quantitySpan = ingredient.querySelector("span");
        quantitySpan.innerText = ingredientQuantities[index] * quantity;
    });

    const total = document.getElementById("total");
    total.innerText = 36 * quantity + " Cookies";
}

// Initial call to update ingredient quantities
updateIngredientQuantities();
