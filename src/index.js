function formatDate(timestamp) {
  let now = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];
  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} at ${hours}:${minutes}`;
}

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#date").innerHTML = formatDate(
    response.data.dt * 1000
  );
  document
    .querySelector("#icon")
    .setAttribute(
      "src",
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    );
  document
    .querySelector("#icon")
    .setAttribute("alt", response.data.weather[0].main);
}

function fetchCity(city) {
  let metric = "metric";
  let apiKey = `9aec27109595b5fdde1289ca7baf818f`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${metric}`;

  axios.get(apiUrl).then(displayWeather);
}

function inputCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  fetchCity(city);
}
let cityName = document.querySelector("#search-form");
cityName.addEventListener("submit", inputCity);

fetchCity("Amsterdam");

function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let apiKey = `9aec27109595b5fdde1289ca7baf818f`;
  let metric = "metric";
  let apiEndpoint = `https://api.openweathermap.org/data/2.5/weather`;
  let url = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appId=${apiKey}&units=${metric}`;
  axios.get(url).then(displayWeather);
}
function displayCurrentCityWeahter(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
}

let currentCity = document.querySelector("#current-city");
currentCity.addEventListener("click", displayCurrentCityWeahter);

function convertToF(event) {
  event.preventDefault();
  let celsius = 16;
  let fahrenheit = Math.round((celsius * 9) / 5 + 32);
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${fahrenheit}`;
}
let unitF = document.querySelector("#Fahrenheit");
unitF.addEventListener("click", convertToF);

function convertToC(event) {
  event.preventDefault();
  let celsius = 16;
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${celsius}`;
}
let unitC = document.querySelector("#Celsius");
unitC.addEventListener("click", convertToC);
