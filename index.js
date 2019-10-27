const express = require('express');

const googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyDfb4VPikT0mwP_L8okI4tPww2ekAYP7Bw'
});


// https://github.com/googlemaps/google-maps-services-js
// https://developers.google.com/maps/documentation/javascript/directions

googleMapsClient.geocode({
  address: '1600 Amphitheatre Parkway, Mountain View, CA'
}, function(err, response) {
  if (!err) {
    console.log(JSON.stringify(response.json.results, null, 2));
  }
});

const app = express();

let port = 3000;
app.listen(port, function() {
   console.log(`listening on http://localhost:${port}`);
});
