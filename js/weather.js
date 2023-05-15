// api key 1938138c975033f862c141a1719ce306
// https://api.openweathermap.org/data/2.5/weather?lat=37.63506232881507&lon=127.02563005658068&appid=1938138c975033f862c141a1719ce306
const API_KEY = "1938138c975033f862c141a1719ce306";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}lon=${lon}&appid=${API_KEY}`;
    fetch(url)
        .then((response) => response.json())
        .then((date) => {
            city.innerText = date.name;
            weather.innerText = `${data.weather[0].main} / ${date.main.temp}`;
        });
}
function onGeoError() {
    alert("Can't find you. No weahter for you. ");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
