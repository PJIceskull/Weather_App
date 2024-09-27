// IMPORT
import * as MODEL from "../model/model.js";

// Variables
export let APIkey = "ec6efbb25da2451c8fe152440242309";
export let baseURL = "http://api.weatherapi.com/v1";

// Functions
function initListeners() {
  MODEL.getCurrentWeather();
}

$(document).ready(function () {
  initListeners();
});
