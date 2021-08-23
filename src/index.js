let baseUrlForMeal = 'http://www.themealdb.com/api/json/v1/1/random.php/'

const generateFoodButton = document.querySelector(`#meal-button`)

//Add event listener click for Generate button: 
generateFoodButton.addEventListener('click', event => {
    console.log('click')
    fetch(baseUrlForMeal)
        .then(response => response.json())
        .then(responseJson => {
        console.log(responseJson)
            // ramenArr.forEach(ramenObject => {
            //     function renderRamenImg (ramenObject){

            //     }
            // })
    })
})

