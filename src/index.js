//API links
const BASE_URL_MEAL = 'https://www.themealdb.com/api/json/v1/1/random.php';
const BASE_URL_ALCOHOLIC ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic';
const BASE_URL_NONALCOHOLIC = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

//Locate items that will be referenced more than once
const formOptions = document.querySelector('#myList');
const mealButton = document.querySelector("#meal-button");
const cocktailButton = document.querySelector("#cocktail-button");

//To be called on page load
function init() {
    generateRandomMeal();
}

//Fetch API data on generate button click
function generateRandomMeal() {
    mealButton.addEventListener('click', e => {
        fetch(BASE_URL_MEAL)
            .then(data => data.json())
            .then(resp => createMealImages(resp))
    });
}

//Display data on page, images at top of page and rest of info in detail box on click
function createMealImages (response) {
    response.meals.forEach(meal => {
        const foodImages = document.querySelector("#meal-recipe-images");
        const foodImageTag = document.createElement('img');

        foodImageTag.src = meal.strMealThumb;
        // foodImages.appendChild(foodImageTag) #to do: delete if we don't need
        foodImages.insertBefore(foodImageTag, foodImages.firstChild);

        foodImageTag.addEventListener('click', e => {  
            const mealDetails = document.getElementById('meal-recipe-detail');
            const mealDetailImgContainer = document.querySelector("#meal-recipe-detail > img");
            
            mealDetailImgContainer.src = meal.strMealThumb;
            
            const mealNameContainer = document.getElementById('meal-detail-name');
            mealNameContainer.textContent = meal.strMeal;

            const mealIngredientsContainer = document.getElementById('meal-ingredients');
            mealIngredientsContainer.innerHTML = "";

            for (let i=1; i<21; i++){
                if(meal[`strIngredient${i}`]){
                    let mealIngredientLi = document.createElement('p');
                    mealIngredientLi.textContent = meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`];
                    mealIngredientsContainer.appendChild(mealIngredientLi);
                }
            }
            
            const mealInstructionsContainer = document.getElementById('meal-instructions');
            const mealInstructionsList = document.getElementById('meal-instructions-list');

            mealInstructionsList.textContent = `Instructions: ${meal['strInstructions']}`;
        });
    });
}

//Meal button styling using event listener
mealButton.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = '#EB4E4E';
});

mealButton.addEventListener('mouseout', e => {
    e.target.style.backgroundColor = '#AFD487';
});

//Fetch drink API data on form submission. Not created as form so need to use click
cocktailButton.addEventListener('click', e => {
    e.preventDefault();

    if (formOptions.value === 'Alcoholic') {
        fetch(BASE_URL_ALCOHOLIC)
        .then(resp => resp.json())
        .then(data => getDrinkImage(data));
    } else if (formOptions.value === 'Non-Alcoholic') {
        fetch(BASE_URL_NONALCOHOLIC)
            .then(resp => resp.json())
            .then(data => getDrinkImage(data));
    }
});

//
function getDrinkImage(response) {
    const getRandomDrink = response.drinks[Math.floor(Math.random() * response.drinks.length)];
    console.log(getRandomDrink);

    const drinkImages = document.querySelector('#drink-images');
    const drinkImageTag = document.createElement('img');

    drinkImageTag.src = getRandomDrink.strDrinkThumb;
    // drinkImages.appendChild(drinkImageTag) #to do: delete this line if needed
    drinkImages.insertBefore(drinkImageTag, drinkImages.firstChild);
    
    drinkImageTag.addEventListener('click', e => {  
        const drinkDetails = document.getElementById('cocktail-name');
        const drinkDetailImgContainer = document.querySelector("#cocktail-recipe-detail > img");
        drinkDetailImgContainer.src = getRandomDrink.strDrinkThumb;
        
        const drinkNameContainer = document.querySelector("#cocktail-recipe-detail > h3");
        drinkNameContainer.textContent = getRandomDrink.strDrink;
    });
}

//Cocktail button styling using event listener
cocktailButton.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = '#EB4E4E';
});

cocktailButton.addEventListener('mouseout', e => {
    e.target.style.backgroundColor = '#AFD487';
});

init();