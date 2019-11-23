// Responsive Navigation Function
function toggleMenu() {
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
};

//Current Date Script
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('currentdate').textContent = new Date().toLocaleString('en-GB', options);

//Event Header
new Date().getDay() == 5 ? document.getElementById('party').innerHTML = "Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion." : document.getElementById('party').style.display = "block";

//Get current year 
var yearnow = new Date();
document.getElementById('thisyear').innerHTML = yearnow.getFullYear();

//Web Font Load API
WebFont.load({
    google: {
        families: ['Gudea', 'Acme']
    }
});



//Lazy Loading Images Script
const images = document.querySelectorAll("img[data-src]");

function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    } else {
    img.src = src;
    }
};

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px 50px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
});

//City Information API Load
fetch('https://byui-cit230.github.io/weather/data/towndata.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const cities = jsonObject['towns'];
        const arrCity = ['Fish Haven', 'Preston', 'Soda Springs']
        for (let i = 0; i < cities.length; i++) {
            if (arrCity.includes(cities[i].name)) {
                let card = document.createElement('section');
                let info = document.createElement('div');
                let name = document.createElement('h2');
                let image = document.createElement('img');
                let motto = document.createElement('h3');
                let history = document.createElement('p');

                name.textContent = cities[i].name;
                motto.textContent = cities[i].motto;
                image.setAttribute('src', 'images/' + cities[i].photo);
                image.setAttribute('alt', 'Represetative Picture of ' + cities[i].name);
                history.innerHTML = ('The city of ' + cities[i].name + ' was founded in ' + cities[i].yearFounded + '. We invite you to our quiet town where our population is ' + cities[i].currentPopulation + '. The climate here is suitable for most out door activities. The annual percipitation is ' + cities[i].averageRainfall + '" for both rain and snow, making it more ideal than Great Britain. Come visit us for one of our events!')
                
                info.setAttribute ('class', 'cityintro');
                info.appendChild(image);
                info.appendChild(history);
                                
                card.appendChild(name);
                card.appendChild(motto);
                card.appendChild(info);
                
                document.querySelector('div.cityinfo').appendChild(card);
            }

        }
    });

//wind chill calculator
var ct = parseFloat(document.getElementById("ctemp").textContent);
var ws = parseFloat(document.getElementById("wspeed").textContent);

if ((isNaN(ct) || isNaN(ws)) || ct>=70) {
    document.getElementById("wchill").innerHTML = "N/A"
} else {
    document.getElementById("wchill").innerHTML = windchill(ct, ws) + '&#8457';
}

function windchill(tempF, speed) {
    return (Math.round(100 * (35.74 + (0.6215 * tempF) - (35.75 * speed**0.16) + (0.4275 * tempF * speed**0.16))) / 100);
};