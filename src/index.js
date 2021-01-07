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
  celsius = response.data.main.temp;
}

function fetchCity(city) {
  let metric = `metric`;
  let apiKey = `9aec27109595b5fdde1289ca7baf818f`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${metric}`;

  axios.get(apiUrl).then(displayWeather);
}
function inputCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-input").value;
  fetchCity(city);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", inputCity);

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
  let temperatureElement = document.querySelector("#temp");
  Celsius.classList.remove("active");
  Fahrenheit.classList.add("active");
  let fahrenheit = (celsius * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheit);
}
function convertToC(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temp");
  Fahrenheit.classList.remove("active");
  Celsius.classList.add("active");
  temperatureElement.innerHTML = Math.round(celsius);
}

let celsius = null;

let unitF = document.querySelector("#Fahrenheit");
unitF.addEventListener("click", convertToF);

let unitC = document.querySelector("#Celsius");
unitC.addEventListener("click", convertToC);

fetchCity("Amsterdam");
