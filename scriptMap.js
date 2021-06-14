let mymap = L.map('mapid').setView([40.4167, -3.70325], 13);

let MAPBOX_TOKEN = 'pk.eyJ1IjoiamFudG9uMTk4MCIsImEiOiJja3BzaXd4Mm8wNHF4MnZwaWNydGNjZHdhIn0.duWzFaJJS05KjayajI9bWQ'

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: MAPBOX_TOKEN
}).addTo(mymap);

let marker = L.marker([40.4167, -3.70325]).addTo(mymap);

marker.bindPopup("<b>Aquí estoy!</b><br>Perdido con una cerveza.").openPopup();

