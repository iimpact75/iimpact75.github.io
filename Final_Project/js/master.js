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
//Temlple API
fetch('../js/temples.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const temples = jsonObject['temples'];
        for (var i = 0; i < temples.length; i++) {
            let plink = document.createElement('a')
            let card = document.createElement('section');
            let name = document.createElement('h2');
            let image = document.createElement('img');
            let history = document.createElement('p');
            let thaddress = document.createElement('h3');
            let tpaddress = document.createElement('p');
            let thschedule = document.createElement('h3');
            let tpschedule = document.createElement('p');

            name.textContent = temples[i].TempleName;
            image.setAttribute('src', temples[i].ImageURL);
            image.setAttribute('alt', 'A picture of a temple of The Church of Jesus Christ of Latter-day Saints, Prophet:' + temples[i].TempleName);
            history.innerHTML = "The uniquely beautiful " + temples[i].TempleName +
                " was announced on: " + temples[i].Announced +
                " and dedicated: " + temples[i].Dedicated +
                ". See below for temple information or click here to go to the official temple webpage hosted by The Church of Jesus Christ of Latter-day Saints.";
            thaddress.innerHTML = "Address:";
            tpaddress.innerHTML = temples[i].Address + "<br>" + temples[i].City + "<br>" + temples[i].State + "<br>" + temples[i].Country + "<br>" + temples[i].PostalCode;
            thschedule.innerHTML = "Schedule:";
            tpschedule.innerHTML = "Current Status: " + temples[i].Status + "<br>";

            card.appendChild(name);
            card.appendChild(image);
            card.appendChild(history);
            card.appendChild(thaddress);
            card.appendChild(tpaddress);
            card.appendChild(thschedule);
            card.appendChild(tpschedule);
           
            plink.appendChild(card);
            plink.setAttribute('href', temples[i].URL);

            document.querySelector('div.cards').appendChild(plink);
        }
    });