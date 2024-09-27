export let APIkey = "ec6efbb25da2451c8fe152440242309";
export let baseURL = "http://api.weatherapi.com/v1";

// JSON API call example
// let URL = `${baseURL}/?key=${APIkey}&q=${Location}&api=no`

export function getForecast() {
  let forcastURL = "http://api.weatherapi.com/v1/forecast.json";
  //   let forcastURL = `${baseURL}/forecast.json?`;
  $.get(forcastURL, function (data) {
    console.log(data);
  }).fail(function (error) {
    console.log("Error: ", error);
  });
}

export function getCurrentWeather() {
  let currentWeatherURL = `${baseURL}/current.json?key=${APIkey}&q=Indianapolis&aqi=no`; // The variables for requesting the url for the current Weather.

  // Get the data for the Current Weather in Indianapolis
  $.get(currentWeatherURL, function (data) {
    console.log(data);
    console.log(data.location);

    $("section h1").html(
      `Today's Forecast in ${data.location.name}, ${data.location.region}`
    );
    $(".currentTime").html(`Date: ${data.location.localtime}`);
    $(".tempContain").append(
      `<h2>${data.current.temp_f} &deg;<sup>F</sup></h2><p class="conditionText">${data.current.condition.text}</p>`
    );
  }).fail(function (error) {
    console.log("Error: ", error);
  });
}

// Get the Weather API URL from a button
export function getURL(url) {
  $.getJSON(url, function (data) {
    console.log(data); // Print out Data from API.
  }).fail(function (error) {
    console.log("error", error.message);
  });
}
