
function localizar(){
  navigator.geolocation.getCurrentPosition(showPosition)  
}

function showPosition(pos){
  var lt = pos.coords.latitude
  var lg = pos.coords.longitude

  document.getElementById("geo").innerHTML =
    "Latitude: " + lt + ", Longitude: " + lg

  var map = L.map('map').setView([lt, lg], 15);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicmhldXNlbGVyIiwiYSI6ImNsMnQweG56bzAzY2wzZHBiZHRzN3g3ZHIifQ.vFH3xdCMnYJEmRQx6hv2kQ'
}).addTo(map);

  var marker = L.marker([lt, lg]).addTo(map);

}
