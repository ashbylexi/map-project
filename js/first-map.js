var map1 = L.map('map1').setView([29, -82.227334], 6.5);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXNoYnlsZXhpIiwiYSI6ImNraHV6NHA2bTEwdDgzMXBnZWJlOGVxc2wifQ.QyX0tmcnSOhrTrrHuqmyWQ'
}).addTo(map1);

let marker1 = L.marker([27.2595713867616, -82.54406005756866]).addTo(map1);
let marker2 = L.marker([29.847166603825194, -81.26483538179568]).addTo(map1);
let marker3 = L.marker([28.34901419757317, -80.60625968708595]).addTo(map1);
let marker4 = L.marker([27.732845261154434, -82.74847153399905]).addTo(map1);
let marker5 = L.marker([30.29397270453302, -81.38953710785545]).addTo(map1);

marker1.bindPopup("<b>Siesta Key Beach</b><br>Named the top beach in the US in 2020.");
marker2.bindPopup("<b>St. Augustine</b><br>A popular surf destination for tourists and locals.");
marker3.bindPopup("<b>Cocoa Beach</b><br>A popular surf spot with many shark sightings each year.");
marker4.bindPopup("<b>St. Pete Beach</b><br>Few waves make for a great young family destination.");
marker5.bindPopup("<b>Jacksonville Beach</b><br>One of the northern-most Florida beaches draws large crowds from northern states.");
