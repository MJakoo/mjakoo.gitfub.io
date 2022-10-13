function DarkMode() {
    var element1 = document.body;
    element1.classList.toggle("dark");
    
}

function Temperature(){
    var test = prompt("Temperature")
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