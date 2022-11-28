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
    fetchWeather: function(cityName){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + this.apiKey)
        .then((responce) => responce.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather;
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
    }
}