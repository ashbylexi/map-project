let map2 = L.map('map2').setView([27.94, -82.47], 13.4);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXNoYnlsZXhpIiwiYSI6ImNraHV6NHA2bTEwdDgzMXBnZWJlOGVxc2wifQ.QyX0tmcnSOhrTrrHuqmyWQ'
}).addTo(map2);

for (let i = 0; i < places.length; i++) {
  L.marker( [ places[i].latitude, places[i].longitude ] ).bindPopup( '<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].descrip + '</p>').addTo(map2);
}
