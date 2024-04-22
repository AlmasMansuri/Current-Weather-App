const input = document.querySelector(".input");
const searchBtn = document.querySelector(".btn");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#windspeed");
const image = document.querySelector(".weather-img");

searchBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const city = input.value;
  currentweather(city);
});

const currentweather = async (city) => {
  //   const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9325c02fbe57116b24144187e4af9e9`

  //   const weather_data=fetch(url).then (response)

  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9325c02fbe57116b24144187e4af9e9`
  );

  const data = await response.json();
  console.log(data);
  temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
  description.innerHTML = `${data.weather[0].description}`;
  humidity.innerHTML = `${data.main.humidity}%`;
  windSpeed.innerHTML = `${data.wind.speed}km/h`;

  if (data.weather[0].main === "Clouds") {
    image.src = "/assets/cloudy.png";
    return;
  } else if (data.weather[0].main === "Clear") {
    image.src = "assets/sunny.png";
    return;
  } else if (data.weather[0].main === "Rain") {
    image.src = "assets/rainy.png";
    return;
  } else if (data.weather[0].main === "Fog") {
    image.src = "assets/fog.png";
    return;
  } else if (data.weather[0].main === "Snow") {
    image.src = "assets/snow.png";
    return;
  }
};
