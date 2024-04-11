const weatherCard = document.querySelector("#weather-card");


const apiKey = '746dc8a3e0c0b3491d2565ebe7d9eb5a';
const city = 'San Miguel de Cozumel';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

async function getWeather() {
    const response = await fetch(apiURL);
    const weatherData = await response.json();
    const temper = weatherData.main.temp;
    const humi = weatherData.main.humidity;
    const descrip = weatherData.weather[0].description;
    const iconCode = weatherData.weather[0].icon;
    const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

    const ptemper = document.createElement("p");
    const phumi = document.createElement("p");
    const iconelement = document.createElement("img");
    const cityelement = document.createElement('p');
    const descriptionelement = document.createElement('p');  

    cityelement.innerText = city;
    ptemper.innerText = Math.round(temper) + "°";

    phumi.innerText = "Humidity: " + humi + "%";
    descriptionelement.innerText = descrip;
    iconelement.setAttribute('src', iconUrl);
    iconelement.setAttribute('id', "icon-weather");

    weatherCard.appendChild(cityelement);
    weatherCard.appendChild(ptemper);
    weatherCard.appendChild(phumi);
    weatherCard.appendChild(iconelement);
    weatherCard.appendChild(descriptionelement);
    
}

getWeather();