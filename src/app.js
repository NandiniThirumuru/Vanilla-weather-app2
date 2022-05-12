function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let h1 = document.querySelector("#city");
  h1.innerHTML = response.data.name;
  let discriptionElement = document.querySelector("#description");
  discriptionElement.innerHTML = response.data.weather[0].description;
  let HumidityElement = document.querySelector("#Humidity");
  HumidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "1018dde2e3a9192a54bf964f57e6bc4d";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
