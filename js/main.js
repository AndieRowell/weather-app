// PSEUDOCODE:
// Using HTML to connect to bootstrap, axios, weather api
// Have one div in the body - use javascript to populate everything into the div
// Use bootstrap to create interface
// When the page loads start the init function that sets up the procedural code
// The INIT function can invoke the div to be populated
//  - the ui interface
//  - getting the data from the weather api
//  - setting the state
// Everything encapsulated into 1 object - weatherApp
//

// Link the weather API:
// be able to call to the api and get the corresponding data when a button is clicked
// dynamically render (create) elements into the div for the weather app
// functions are used to take the data and populate it into the created elements
//

// built in api request by zip code - weather
// https://openweathermap.org/current#zip

//CONSIDER

// methods to create elements, classes, assigning ids
// function that creates elements - specific parameters
// - appending

// the zipcode is a variable that we make
// result is an object - get to some of those properties with dot notation

//===========================================================================

// DAY 2 FRESH EYES PSEUDOCODE:

//===========================================================================

// SETUP
// html should have one div - add an id attribute to reference it later "weather-app"
//      <div id="weather-app"></div>

// init my variables
// - variables
//      - what do i need to have?
//          - weather app to connect to the div
//                let weatherApp = document.getElementById("weather-app");

//          - zip code input
//
//            let zipCodeInput = document.createElement("input");
//              - do i need to set attributes for these elements i create?
//              - placeholder text
//                  zipCodeInput.setAttribute("type", "text")
//                  zipCodeInput.setAttribute("placeholder", "Enter Zipcode")

//
//          - submit button
//          - display boxes
//

// - basically repeating creating elements that are similar to display data
// - can use createElement?

// ACTIONABLE ITEMS
// - submit button needs a click event listener to call to the api
//      - axios request to the weather api
//      - use the given api key
//          - 3e79b3e3191c769f1ad5bd499fc2b06e
//      - the response you get should return the data into the corresponding variables that were initialized
//      - display that data
//      - populate the data into the "html" text displays (replace the placholders?)
//          - use .innerHTML??
//      - clarify the 'catch' errors and populate the error text displays

// still need to use appendChild to append the elements to the weather app div
//  - can add this to the end - but can't forget this!!!!

// USING AXIOS TO GET DATA FROM API
// - need to define the get request
//      - axios.get(api....)
//          .then((response) => {
//              const data = response.data;
// - extract and display relevent weather data
//              const
//        })



// EXTRAS - STRETCH GOALS?
// - a toggle button to change from celsius to fahrenheit - vice versa
//      - probably use an if else statement with the click handler?
// - render a loading spinner/bar while axios gets the data

// NOTE! - parameters for temp units
// - fahrenheit = imperial
// - celsius = metric
// - temp in kelvin is the default


//LOADING BAR
// - html <progress>
// - set attributes - value="0" max ="100"
// - an id is needed? - progress-bar
/*
    <label for="progress-bar">0%</label>
    <progress id="progress-bar" value="0" max="100"></progress>
*/


//=====================================================================================

//INITIALIZE
// THERE SHOULD BE A FUNCTION THAT INITIALIZES
// This would create the element and click handler

//!function to initialize
function init(){
    const apiKey = "3e79b3e3191c769f1ad5bd499fc2b06e" //api Key
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?zip={zip code},&appid={3e79b3e3191c769f1ad5bd499fc2b06e}" //api url
    submitButton.addEventListener('click', checkZipDigits); //when clicked submit button runs checkzipdigits function

    function checkZipDigits();
    //set up form visual

};






//!function to check if all 5 digits of zipcode are entered - else alert message
function checkZipDigits(){
    if (zipcode.length != 5 || isNaN(zipcode)){
        alert('invalid zipcode')
        return false
    } else {
        return true
    }
};

//!function that uses axios to call to api
async function getWeatherData(){
    try
    let weatherData = await axios.get("https://api.openweathermap.org/data/2.5/weather?zip={zip code},&appid={3e79b3e3191c769f1ad5bd499fc2b06e}")
    console.log(weatherData.data)
    return weatherData.data
}   catch (error){

};

//     return weatherData
//     .then((response) => {
//         const weather = response.data;
//         const
//         const
//         // instead set State - and then render what's in state using the function created for making the displays
//     })
//     .catch(error => {
//         console.log(error);
//     })
// });



}

// testing axios call
// global variables
/*
const api_url = "https://jsonplaceholder.typicode.com/posts/1"
function init(){
    setup variables, const
    clickhandlers

    console.log("hello sandbox");
    test_axios();
}

function test_axios(){
    const result = axios.get(api_url);
    console.log(result);
}
*/

// const getWeatherInfo = axios.get("https://api.openweathermap.org/data/2.5/weather?zip={zip code},&appid={3e79b3e3191c769f1ad5bd499fc2b06e}")

// connects to main div in html
const weatherApp = document.getElementById("weather-app");


// creates a 'parent' div to contain the input and button together
const inputButtonContainer = document.createElement("div");
weatherApp.appendChild(inputButtonContainer);

// creates a zipcode input element
const zipCodeInput = document.createElement("input");
inputButtonContainer.appendChild(zipCodeInput);

// sets type attribute and placeholder text
zipCodeInput.setAttribute("type", "text");
zipCodeInput.setAttribute("placeholder", "Enter Zipcode");
zipCodeInput.classList.add("text-center", "mx-auto", "d-flex");

// creates a submit button element
const submitButton = document.createElement("button");
inputButtonContainer.appendChild(submitButton);

// adds text to the submit button
submitButton.textContent = "Get Weather";





// creates a div for the city info to be displayed
const weatherCity = document.createElement("div");

// creates a div for the temperature info to be displayed
const weatherTemp = document.createElement("div");

// creates a div for the condition info to be displayed
const weatherCond = document.createElement("div");

// creates a div for the image to be displayed
const weatherImage = document.createElement("div");

// turning wet to dry.....
// add a class to my main div

// create specific blocks - so that i can repeat for each of the element groupings

//function to make a block - have "instructions"
// - creates the div 'display block'
// - .classlist.add (col-4 or row)


// - header block
// - need to append display and header
// - creates the header text - const headerText - textContent
// - creates the body text
// if else within - if there is an image != undefined - then an image is rendered
// - else the text is rendered
// if(instructions.img != undefined) {
//   const img
//}
// - a for loop within if
// - looping through - if the data is defined then loop through the array and add display blocks


//do i need a function to be creating these cards instead to add bootstrap styling?
// function createWeatherCard(title, data) {
    // const card = document.createElement("div");
    // card.classList.add ("card");
// }
//css tricks - complete guide to flexbox




// add event listener to button - when clicked store zipcode variable value in the zipcodeInput?
submitButton.addEventListener('click', getWeatherData);


//under a function getWeatherData

//data has to be stored first
const zipcode = zipcodeInput.value;
// then use axios to call to the api
axios.get("https://api.openweathermap.org/data/2.5/weather?zip={zip code},&appid={3e79b3e3191c769f1ad5bd499fc2b06e}")
        .then((response) => {
            const weather = response.data;
            const
            const
            // instead set State - and then render what's in state using the function created for making the displays
        })
        .catch(error => {
            console.log(error);
        })
});




// function to call to the api?
//const axios = require("axios");

/*
const getWeatherInfo = async () => {
    const response = await axios.get("");
};

const weatherInfo =

const getWeatherInfo = async () => {
    try {
         const weatherInfo = await axios.get('url')
    } catch(err) {
         console.log('err')
    }
}
*/




/*
axios.get("https://api.openweathermap.org/data/2.5/weather?q=Lisbon&APPID={YOUR_API_KEY}")
  .then(response => {
    const weather = response.data;
    const lon = weather.coord.lon;
    const lat = weather.coord.lat;
    console.log(`The temperature in Lisbon is ${weather.main.temp}^oC`);
  })
  .catch(error => {
    console.log(error);
  });
*/

//axios.get("https://api.openweathermap.org/data/2.5/weather?zip={zip code},&appid={3e79b3e3191c769f1ad5bd499fc2b06e}&units=imperial");
//    .then






//appends newly created elements to the weather-app div
//weatherApp.appendChild(zipCodeInput);
//weatherApp.appendChild(submitButton);
weatherApp.appendChild(weatherCity);
weatherApp.appendChild(weatherTemp);
weatherApp.appendChild(weatherCond);
weatherApp.appendChild(weatherImage);


//append smaller divs to the larger container divs
//and append the larger container div to the html through get element by id

//document.body.


// consider - when the user wants to look up another zip code - everything should be cleared and rerendered...
