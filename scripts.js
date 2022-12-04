function DarkMode() {
    var element1 = document.body;
    element1.classList.toggle("dark");
    const element2 = document.querySelectorAll('.link');
    for(let el of element2)
        el.classList.toggle('dlink');
}

function Temperature(){
    var test = prompt("Temperature(Ex.: 54f) ")
    var forc = test.slice(-1)
    var temp = parseInt(test.slice(0,-1))
    
    if(forc == "f" || forc == "F"){
        temp = ((temp-32)*5)/9
        alert("The Temperature is " + temp + " Celsium")
    }
    else if(forc == "c" || forc == "C"){
        alert("The Temperature is " + temp + " Celsium")
    }
    else{
        alert("Something went Wrong!")
    }
    
}


//Weather and Geolocation:

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

function fetchWeatherll(lon, lat){
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + lon + "&lon=" + lat + "&appid="+ weather.apiKey +"&units=metric")
    .then((responce) => responce.json())
    .then((data) => this.displayWeather(data))
    .catch(err => alert("Cordinates are non existant!"))
};

function search2(){
    this.fetchWeatherll(document.querySelector(".search-bar-lon").value, document.querySelector(".search-bar-lat").value );
};

document.querySelector(".search-bar-lon").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        search2();
    }
});
document.querySelector(".search-bar-lat").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        search2();
    }
});

//Geolocation Finder

var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function searchCord(){
    getLocation()
    this.fetchWeatherll(document.querySelector(position.coords.latitude), 
    document.querySelector(position.coords.longitude));
}