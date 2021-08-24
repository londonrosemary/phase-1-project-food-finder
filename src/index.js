const BASE_URL_MEAL = 'https://www.themealdb.com/api/json/v1/1/random.php'
const BASE_URL_ALCOHOLIC ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic'
const BASE_URL_NONALCOHOLIC = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
const alcoholOption = document.querySelector('#alco')
const nonAlcoholOption = document.querySelector('#non-alco')
const formOptions = document.querySelector('#myList')


// function makeGetRequest() {
//     return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
//         .then(response => response.json())
//         .then(console.log)
// }

// makeGetRequest()
function generateRandomMeal() {
    const mealButton = document.querySelector("#meal-button")
    mealButton.addEventListener('click', e => {
        fetch(BASE_URL_MEAL)
            .then(data => data.json())
            .then(resp => console.log(resp))
    })
}

function init() {
    generateRandomMeal()
    // drinkSearch()
}

init()


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




// let baseUrlForMeal = 'http://www.themealdb.com/api/json/v1/1/random.php/${meal}'

// const generateFoodButton = document.querySelector(`#meal-button`)

// //Add event listener click for Generate button: 
// generateFoodButton.addEventListener('click', event => {
//     console.log('click',)
//     fetch(baseUrlForMeal, {
//         mode: 'no-cors',
//         credentials: 'include',
//     })
//         .then(function (response) {
//         console.log(response);
//         return response.json();
//         })
//         .then(data => console.log(data))
//         //.then(resp => resp.json())
//         // .then(response => response.json())
//         //    ramenArr.forEach(ramenObject => {
//         //  function renderRamenImg (ramenObject){

//         //     }
//             // })

// })

