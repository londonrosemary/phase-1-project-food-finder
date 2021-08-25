//API links
const BASE_URL_MEAL = 'https://www.themealdb.com/api/json/v1/1/random.php'
const BASE_URL_ALCOHOLIC ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
const BASE_URL_NONALCOHOLIC = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
// const alcoholOption = document.querySelector('#alco')
// const nonAlcoholOption = document.querySelector('#non-alco')
const formOptions = document.querySelector('#myList')

function init() {
    generateRandomMeal()
}

//Fetch API data on generate button click
function generateRandomMeal() {
    const mealButton = document.querySelector("#meal-button")
    mealButton.addEventListener('click', e => {
        fetch(BASE_URL_MEAL)
            .then(data => data.json())
            .then(resp => createMealImages(resp))
    })
}

//Display data on page, images at top of page and rest of info in detail box on click
function createMealImages (response) {
    response.meals.forEach(meal => {
        const foodImages = document.querySelector("#meal-recipe-images")
        const foodImageTag = document.createElement('img')
        foodImageTag.src = meal.strMealThumb;
        foodImages.appendChild(foodImageTag)

        foodImageTag.addEventListener('click', e => {  
            const mealDetails = document.getElementById('meal-recipe-detail')
            const mealDetailImgContainer = document.querySelector("#meal-recipe-detail > img")
            mealDetailImgContainer.src = meal.strMealThumb
            
            const mealNameContainer = document.getElementById('meal-detail-name')
            mealNameContainer.textContent = meal.strMeal

            const mealIngredientsContainer = document.getElementById('meal-ingredients')
            mealIngredientsContainer.innerHTML = ""

            for (let i=1; i<21; i++){
                if(meal[`strIngredient${i}`]){
                    let mealIngredientLi = document.createElement('p')
                    mealIngredientLi.textContent = meal[`strMeasure${i}`] + ' ' + meal[`strIngredient${i}`]
                    mealIngredientsContainer.appendChild(mealIngredientLi)
                }
            }
            
            const mealInstructionsContainer = document.getElementById('meal-instructions')

            const mealInstructionsList = document.getElementById('meal-instructions-list')
            mealInstructionsList.textContent = `Instructions: ${meal['strInstructions']}`
            
        })
    })
}

//Fetch drink API data on form submission. Not created as form so need to use click
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