const ForeCastWeatherURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=44816e5905baa4f18d6261ad8ccb925a&units=imperial";

fetch(ForeCastWeatherURL)
    .then(response => response.json())
    .then(jsObject => {
        for (i = 0; i < 3; i++) {
            let trow = document.createElement('tr')
            trow.setAttribute('class', 'row' + (i + 1));
            document.querySelector('tbody').appendChild(trow);
        };
        for (j = 0; j < jsObject.list.length; j++) {
            if (jsObject.list[j].dt_txt.includes('18:00:00')) {
                let thcell = document.createElement('th');
                let ttcell = document.createElement('td');
                let ticell = document.createElement('td');
                let images = document.createElement('img');

                let fdate = new Date(jsObject.list[j].dt_txt);
                let wday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

                images.setAttribute('src', "http://openweathermap.org/img/w/" + jsObject.list[j].weather[0].icon + ".png");
                images.setAttribute('alt', 'jsObject.list[j].weather[0].description');
                thcell.textContent = wday[fdate.getDay()];

                ticell.appendChild(images);
                ttcell.innerHTML = jsObject.list[j].main.temp + ' &#8457';

                document.querySelector('tr.row1').appendChild(thcell);
                document.querySelector('tr.row2').appendChild(ticell);
                document.querySelector('tr.row3').appendChild(ttcell);
            };
        };
    });