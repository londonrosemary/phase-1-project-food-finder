const BASE_URL_MEAL = 'www.themealdb.com/api/json/v1/1/random.php'

function generateRandomMeal() {
    const mealButton = document.querySelector("#meal-button")
    mealButton.addEventListener('click', e => {
        fetch(BASE_URL_MEAL, {
            mode: 'no-cors',
            credentials: 'include',
        })
        .then(data => data.json())
        .then(resp => console.log(resp))
    })
}

function init() {
    generateRandomMeal()
}

init()




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

