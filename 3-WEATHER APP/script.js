let temp = document.querySelector("#temp");
let cityName = document.querySelector("#city-name");
let humidity = document.querySelector("#humidity-perc");
let windSpeed = document.querySelector("#wind-speed");
let input = document.querySelector("input");
let searchBtn = document.querySelector("#search-btn");
let weatherImg = document.querySelector("#weather-img img");

let city = "jhang";

let apiKey = "04630e6bb5867e948773ac8d07d84c15";
let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getWeatherData(city) {
    try {
        let response = await fetch(url + city + `&appid=${apiKey}`);
        let data = await response.json();

        temp.innerHTML = Math.round(data.main.temp) + ` &deg` + "C";
        cityName.innerText = data.name;
        humidity.innerText = data.main.humidity + "%";
        windSpeed.innerText = data.wind.speed + "km/h";

        console.log(data.weather[0].main);

        if (data.weather[0].main == "Clear") {
            weatherImg.src = "images/clear.png";
        } else if (data.weather[0].main == "Clouds") {
            weatherImg.src = "images/clouds.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherImg.src = "images/drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherImg.src = "images/mist.png";
        } else if (data.weather[0].main == "Rain") {
            weatherImg.src = "images/rain.png";
        } else if (data.weather[0].main == "Snow") {
            weatherImg.src = "images/snow.png";
        }

    } catch (error) {
        console.log(error);
        // alert("Enter a valid city name / Check your internet connection.");
    }
}

searchBtn.addEventListener("click", () => {
    if (input.value !== "") {
        city = input.value.toLowerCase();
        getWeatherData(city);
    }
})


window.addEventListener("load", () => {
     getWeatherData(city);
});