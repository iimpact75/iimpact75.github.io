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