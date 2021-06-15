function getRandomInRange(from, to, fixed) {
  return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

setTimeout(function () {
  const x = getRandomInRange(-90, 90, 5);
  const y = getRandomInRange(-90, 90, 5);
  var map = L.map("mapid").setView([x, y], 6);
  let MAPBOX_TOKEN = 'pk.eyJ1IjoiamFudG9uMTk4MCIsImEiOiJja3BzaXd4Mm8wNHF4MnZwaWNydGNjZHdhIn0.duWzFaJJS05KjayajI9bWQ'
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2ZtaWxsYW5tIiwiYSI6ImNrcHBxZDNxYzNiY3Eyd3JpaWxmdjlhbXUifQ.6i6Xjk628Wt1_4OqLdYLHw",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken: MAPBOX_TOKEN
    }
  ).addTo(map);

  L.marker([x, y])
    .addTo(map)
    .bindPopup("Perdido con una cerveza.")
    .openPopup();
}, 1000);