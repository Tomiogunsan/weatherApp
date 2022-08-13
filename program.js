window.onload = handleSearch;
function handleSearch() {
    document.querySelector(".button").addEventListener("click", getWeather);
}


var apiKey = "5e487bff959a853ff5b85e79d43ebc6c";
function getWeather(textValue) {
    var text = document.querySelector(".text")
    var textValue = text.value;
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + textValue
        + "&appid=" + apiKey + "&units=metric")
        .then((response) => response.json())
        .then((data) => displayWeather(data));
}

function displayWeather(data) {
    var { name } = data;
    var { icon, description } = data.weather[0];
    var { temp, humidity } = data.main;
    var { speed } = data.wind;
    document.querySelector(".city").innerText = name;
    document.querySelector(".temp").innerText = temp + " °C";
    document.querySelector(".humidity").innerText = "Humidity: "
    + humidity + "%";

document.querySelector(".windSpeed").innerText = "Wind Speed: "
    + speed + " km/h";

document.querySelector(".img").src = "http://openweathermap.org/img/wn/"
    + icon + ".png";

document.querySelector(".description").innerText = description;

var text = document.querySelector(".text")
var textValue = text.value;
let speech = new SpeechSynthesisUtterance();
                speech.lang = "en-US";
                
                speech.text = textValue + temp + " °Celsius" + description +
                "Humidity is " + humidity + "%" + "Wind Speed is "
                + speed + "kilometer per hour";
                speech.volume = 1;
                speech.rate = 1;
                speech.pitch = 1;
             window.speechSynthesis.speak(speech);
}