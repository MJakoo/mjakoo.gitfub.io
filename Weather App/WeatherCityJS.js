let weather = {
    "apiKey": "60c00ba990d8bb9c32f39374f3636d1f",  //API key that was given from OpenWeather API
}
    function fetchWeather(cityName){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + weather.apiKey + "&units=metric")
        .then((responce) => responce.json())
        .then((data) => this.displayWeather(data))
        .catch(err => alert("Wrong City Name!"))
    };

    async function displayWeather(data){
        const { name } = data;
        const { country } = data.sys;
        const { icon, main, description } = data.weather[0];
        const { temp, humidity, feels_like, temp_min, temp_max, pressure } = data.main;
        const { speed } = data.wind;

        var fullCountry =  await requestFullname(country);

        document.querySelector(".city").innerText = "Weather in " + name + ", " + fullCountry;
        
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".mainD").innerText = main;
        document.querySelector(".description").innerText = "Description: " + description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerHTML = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " m/s";
        document.querySelector(".temp_min").innerText = "Minimum Temperature: " + temp_min + "°C";
        document.querySelector(".temp_max").innerText = "Maximumm Temperature: " + temp_max + "°C";
        document.querySelector(".pressure").innerText = "Pressure: " + pressure;
        document.querySelector(".feels_like").innerText = "Feels Like: " + feels_like + "°C"; 
        document.querySelector(".info").innerText = "More Information:"
    };

    async function requestFullname(country) {

        let nameApi = `https://restcountries.com/v2/alpha/` + country;
        const cityName = fetch(nameApi)
        .then(response =>response.json())
        .then(result => { return result.name })
      
        
        return cityName
      
      }

    function search(){
        this.fetchWeather(document.querySelector(".search-bar").value)
        .catch(err => search2())
    };

document.querySelector(".search button").addEventListener("click", function(){
    search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        search();
    }
});
