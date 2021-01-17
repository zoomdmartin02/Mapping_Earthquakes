// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.

    //following is a cleaner way to set:     let map = L.map('mapid').setView([40.7, -94.5], 4);
    //but below i smore useful when we need to add multiple tile layers or a background image:

//let map = L.map("mapid", {
//    center: [
//      40.7, -94.5
//    ],
//    zoom: 4
//  });


// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//    maxZoom: 18,
//    accessToken: API_KEY
//});

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Street: streets,
  Dark: dark
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [30, 30],
  zoom: 2,
  layers: [streets]
})

L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
//streets.addTo(map);

//  Add a marker to the map for Los Angeles, California.
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

//L.circle([34.0522, -118.2437], {
//  radius: 100
//}).addTo(map);

// An array containing each city's location, state, and population.
//let cities = [{
//  location: [40.7128, -74.0059],
//  city: "New York City",
//  state: "NY",
//  population: 8398748
//},
//{
//  location: [41.8781, -87.6298],
//  city: "Chicago",
//  state: "IL",
//  population: 2705994
//},
//{
//  location: [29.7604, -95.3698],
//  city: "Houston",
//  state: "TX",
//  population: 2325502
//},
//{
//  location: [34.0522, -118.2437],
//  city: "Los Angeles",
//  state: "CA",
//  population: 3990456
//},
//{
//  location: [33.4484, -112.0740],
//  city: "Phoenix",
//  state: "AZ",
//  population: 1660272
//}
//];

//L.circleMarker([34.0522, -118.2437], {
//  radius: 30,

//  color:  "black",
//  fillColor:  '#ffffa1'
//}).addTo(map);

// Get data from cities.js
//let cityData = cities;

// Loop through the cities array and create one marker for each city.
//cityData.forEach(function(city) {
//  console.log(city)
//  L.circleMarker(city.location, {
//    radius: city.population/100000
//  })
//  .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//.addTo(map);
//});

// Coordinates for each point to be used in the line.
//let line = [
//  [33.9416, -118.4085],
//  [37.6213, -122.3790],
//  [40.7899, -111.9791],
//  [47.4502, -122.3088]
//];

// Create a polyline using the line coordinates and make the line red.
//L.polyline(line, {
//  color: "yellow"
//}).addTo(map);

// Add GeoJSON data.
//let sanFranAirport =
//{"type":"FeatureCollection","features":[{
//    "type":"Feature",
//    "properties":{
//        "id":"3469",
//        "name":"San Francisco International Airport",
//        "city":"San Francisco",
//        "country":"United States",
//        "faa":"SFO",
//        "icao":"KSFO",
//        "alt":"13",
//        "tz-offset":"-8",
//        "dst":"A",
//        "tz":"America/Los_Angeles"},
//        "geometry":{
//            "type":"Point",
//            "coordinates":[-122.375,37.61899948120117]}}
//]};

// Grabbing our GeoJSON data.
//L.geoJson(sanFranAirport, {
  // We turn each feature into a marker on the map.
//  pointToLayer: function(feature, latlng) {
//    console.log(feature);
//    return L.marker(latlng)
//    .bindPopup("<h2>" + feature.properties.city + "</h2>");
//  }
// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/zoomdmartin02/Mapping_Earthquakes/main/majorAirports.json"

 // L.geoJson(sanFranAirport, {
 //   // We turn each feature into a marker on the map.
 //   onEachFeature: function(feature, layer) {
 //     console.log(layer);
 //     layer.bindPopup("<h2>" + feature.properties.city + "</h2> <br>" + "<h3>" + feature.properties.name + " (" + feature.properties.faa + ")</h3>");
 //   }
//}).addTo(map);

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
  console.log(data);

// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data).addTo(map);
});