const BASE_URL_MEAL = 'https://www.themealdb.com/api/json/v1/1/random.php'
const BASE_URL_ALCOHOLIC ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
const BASE_URL_NONALCOHOLIC = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
// const alcoholOption = document.querySelector('#alco')
// const nonAlcoholOption = document.querySelector('#non-alco')
const formOptions = document.querySelector('#myList')

function init() {
    generateRandomMeal()
}

function generateRandomMeal() {
    const mealButton = document.querySelector("#meal-button")
    mealButton.addEventListener('click', e => {
        fetch(BASE_URL_MEAL)
            .then(data => data.json())
            .then(resp => createMealImages(resp))
    })
}

function createMealImages (response) {
    response.meals.forEach(meal => {
        const foodImages = document.querySelector("#meal-recipe-images")
        const foodImageTag = document.createElement('img')
        foodImageTag.src = meal.strMealThumb;
        foodImages.appendChild(foodImageTag)

        foodImages.addEventListener('click', e => {  
            const mealDetails = document.getElementById('meal-recipe-detail')
            const mealDetailImgContainer = document.querySelector("#meal-recipe-detail > img")
            mealDetailImgContainer.src = meal.strMealThumb
            
            const mealNameContainer = document.createElement('h3')
            mealNameContainer.id = 'meal-detail-name'
            mealNameContainer.textContent = meal.strMeal

            const mealIngredientsContainer = document.createElement('ul')
            mealIngredientsContainer.id = 'meal-ingredients'
            mealIngredientsContainer.textContent = 'Ingredients: '

            const mealIngredientsList = document.createElement('li')
            mealIngredientsList.textContent = meal['strIngredient']
            mealIngredientsContainer.appendChild(mealIngredientsList)
            
            const mealInstructionsContainer = document.createElement('ul')
            mealInstructionsContainer.id = 'meal-instructions'
            mealInstructionsContainer.textContent = "Instructions: "

            const mealInstructionsList = document.createElement('li')
            mealInstructionsList.textContent = meal['strInstructions']
            mealInstructionsContainer.appendChild(mealInstructionsList)

            mealDetails.append(mealNameContainer, mealIngredientsContainer, mealInstructionsContainer)
            
        })
    })
}

function drinkSearch() {
    const cocktailButton = document.querySelector("#cocktail-button")
    cocktailButton.addEventListener('click', e => {
        e.preventDefault()
        if (formOptions.value === 'Alcoholic') {
            fetch(BASE_URL_ALCOHOLIC)
            .then(data => data.json())
            .then(resp => console.log(resp))
        } 
        else if (formOptions.value === 'Non-Alcoholic') {
                fetch(BASE_URL_NONALCOHOLIC)
                .then(data => data.json())
                .then(resp => console.log(resp))
        }
    })
}



init()

