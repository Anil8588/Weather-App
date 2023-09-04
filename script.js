const apikey= "4f42a5bd0219b2e95bf515af925b20da"

const weatherDataEl=document.getElementById("weather-data")

const cityInputEl=document.getElementById("city-input")

const formEl=document.querySelector("form")

formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    const cityValue=cityInputEl.value;
    getWeatherData(cityValue)
})

function getWeatherData(cityValue){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`)
        if(!response.ok){
            throw new Error("Network response was not ok"
            )
        }
        const data = await response.json()
const temperture = Math.round(data.main.temp)

const description = data.weather[0].description

const icon = data.weather[0].icon
const details = [
    `Feels like: ${Math.round(data.main.feels_like)}`,
    `Humindity: ${data.main.humidity}`,
    `Wind speed: ${data.wind.speed}`,
]

weatherDataEl.querySelector(".icon").innerHTML= ` <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather-icon">`

    } catch (error) {
        
    }
}


