const CurrentWeatherURL =
    "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=44816e5905baa4f18d6261ad8ccb925a&units=imperial";
fetch(CurrentWeatherURL)
    .then(response => response.json())
    .then(jsObject => {
        document.getElementById("ccondition").textContent = jsObject.weather[0].main;
        document.getElementById("ctemp").textContent = jsObject.main.temp;
        document.getElementById("htemp").textContent = jsObject.main.temp_max;
        document.getElementById("humid").textContent = jsObject.main.humidity;
        document.getElementById("wspeed").textContent = jsObject.wind.speed;

    });