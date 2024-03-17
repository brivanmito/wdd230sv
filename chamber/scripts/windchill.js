

const apiKey = '746dc8a3e0c0b3491d2565ebe7d9eb5a';
const city = 'Quevedo';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let temperature = document.getElementById("temperature");
let windChill = document.getElementById("windChill"); 
let description = document.getElementById("description"); 

let iconWeather = document.getElementById("iconWeather");

async function getWeather() {
  const response = await fetch(apiURL);
  const weatherData = await response.json();
  const temp = weatherData.main.temp;
  const windspeed = weatherData.wind.speed;
  const descrip = weatherData.weather[0].description;
  const tempFaren = (temp * (9/5)) + 32;
  const iconCode = weatherData.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  iconWeather.setAttribute("src", iconUrl);
  description.innerHTML = descrip.toUpperCase();


  temperature.innerHTML = "Temperature: " + Math.round(tempFaren) + "°F";
  getwinchill(tempFaren, windspeed);

}

async function getwinchill(a, b) {
    if(a <=50 && b > 3.0){
        const wC =   35.74 + (0.6215 * a) - (35.75 * Math.pow(b, 0.16)) + (0.4275 * a * Math.pow(b, 0.16));
        windChill.innerHTML = "Windchill: " + Math.round(wC) + "F°";
    } else {
        windChill.innerHTML = "Windchill: N/A";
    }
}

getWeather();
