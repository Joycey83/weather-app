//⏰Feature #1
let currentTime = new Date();

function formatDate(greenwhichMeanTime) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dateTime = document.querySelector("#date-time");
  let currentDay = days[greenwhichMeanTime.getDay()]; // Map
  let currentDate = greenwhichMeanTime.getDate();
  let hour = greenwhichMeanTime.getHours();
  let minutes = greenwhichMeanTime.getMinutes();

  dateTime.innerHTML = `${currentDay},  ${currentDate},  ${hour}:${minutes} `;

  return dateTime;
}

formatDate(currentTime);

const displayWeatherInfo = function (response) {
  // console.log(response);
  document.querySelector("#city-name").innerHTML = response.data.name;
  let roundTempNum = Math.round(response.data.main.temp);
  document.querySelector("#weather-temp").innerHTML = `${roundTempNum}°C`;
  document.querySelector("#weather-description").innerHTML =
    response.data.weather[0].description;
};

const searchCity = function (cityName) {
  let apiKey = "597c40c39084687093b091cd48b366f8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherInfo);
};

const searchInfo = function (event) {
  event.preventDefault();
  let cityName = document.querySelector("#search-input").value;
  searchCity(cityName);
};

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchInfo);

// Current Location Button
const searchCurrentLocation = function (position) {
  let apiKey = "597c40c39084687093b091cd48b366f8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherInfo);
};

const currentLocation = function (event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchCurrentLocation);
};

const locationButton = document.querySelector("#location-btn");
locationButton.addEventListener("click", currentLocation);

searchCity("London");

// celsius Convert Function
const celsiusInfo = function (event) {
  event.preventDefault();
  const tempC = document.querySelector("#temperature");
  tempC.innerHTML = 12;
};
const celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", celsiusInfo);

//fahrenheit Convert Function
const fahrenheitInfo = function (event) {
  event.preventDefault();
  const tempF = document.querySelector("#temperature");
  tempF.innerHTML = 48;
};

const fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", fahrenheitInfo);
