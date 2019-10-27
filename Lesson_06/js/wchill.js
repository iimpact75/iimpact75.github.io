var ct = parseFloat(document.getElementById("ctemp").textContent);
var ws = parseFloat(document.getElementById("wspeed").textContent);

if ((isNaN(ct) || isNaN(ws)) || ct>=70) {
    document.getElementById("wchill").innerHTML = "N/A"
} else {
    document.getElementById("wchill").innerHTML = windchill(ct, ws) + '&#8457';
}

function windchill(tempF, speed) {
    return (Math.round(100 * (35.74 + (0.6215 * tempF) - (35.75 * speed**0.16) + (0.4275 * tempF * speed**0.16))) / 100);
}