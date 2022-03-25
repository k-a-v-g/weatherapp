var cityinp = document.querySelector('#cityinput');
var button = document.querySelector('#enter');
var city = document.querySelector('#cityname');
var details = document.querySelector('#details');
var temperature = document.querySelector('#temp');
var windsp = document.querySelector('#windspeed');
var icon = document.querySelector("#icon");


apik = "aa67b32def20354807341ee27ff707e8"

function convert(val){
    return (val - 273).toFixed(2)
}

    button.addEventListener('click', function(){

        fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityinp.value+'&appid='+apik)
        .then(res => res.json())

        .then(data => {

            var nameval = data['name']
            var det = data['weather']['0']['description']
            var temp = data['main']['temp']
            var wind = data['wind']['speed']
            var icon1 = data['weather']['0']['icon']

            city.innerHTML=`<span>${nameval}<span>`;
            temperature.innerHTML = `<span>${ convert(temp)} °C</span>`;
            details.innerHTML = `<span>${det}<span>`;
            windsp.innerHTML = `wind speed: <span>${wind} km/h<span>`;
            icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${icon1}@2x.png">`;

        })
        .catch(err => alert('Please enter a valid city name'))
    })
