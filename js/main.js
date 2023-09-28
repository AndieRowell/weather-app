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

//LOADING BAR
// - html <progress>
// - set attributes - value="0" max ="100"
// - an id is needed? - progress-bar
/*
    <label for="progress-bar">0%</label>
    <progress id="progress-bar" value="0" max="100"></progress>
*/


//=====================================================================================

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

// connects to main div in html
const weatherApp = document.getElementById("weather-app");
// creates a zipcode input element
const zipCodeInput = document.createElement("input");
// sets type attribute and placeholder text
zipCodeInput.setAttribute("type", "text");
zipCodeInput.setAttribute("placeholder", "Enter Zipcode");
// creates a submit button element
const submitButton = document.createElement("button");
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
