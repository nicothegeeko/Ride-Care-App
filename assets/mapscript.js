visualRefresh = true; 

var routeData;  // defined for global scope

// define set of tested routes for the application
var validRoute = ['2', '92', '180', '780'];
var validRouteSet = new Set(validRoute);

function initMap() {
    var latlngLA = new google.maps.LatLng(34.0397099,-118.55429);
    var settings = {
    zoom: 15,
    center: latlngLA, 
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), settings)
};

// var minLatitude = 33.0;
// var maxLatitude = 34.2;
// var minLongitude = -118.56;
// var maxLongitude = -118.25;
  // var southWest = new google.maps.LatLng(minLatitude, minLongitude);
  // var northEast = new google.maps.LatLng(maxLatitude, maxLongitude);
  // var bounds = new google.maps.LatLngBounds(southWest,northEast);
   // map.fitBounds(bounds);


// fitBounds(bounds:LatLngBounds|LatLngBoundsLiteral)

// initial map center based on LA 


// ++++++++++++++++++++
// var bounds = new google.maps.LatLngBounds();

// bounds.extend(new google.maps.LatLng('66.057878', '-22.579047')); // Iceland
// bounds.extend(new google.maps.LatLng('37.961952', '43.878878')); // Turkey

// this.map.fitBounds(bounds);
// ++++++++++++++++++++

// function initMap() {
  // var southWest = new google.maps.LatLng(minLatitude, minLongitude);
  // var northEast = new google.maps.LatLng(maxLatitude, maxLongitude);
  // var bounds = new google.maps.LatLngBounds(southWest,northEast);
  //var latlng = new google.maps.LatLng(34.0397099,-118.55429);
  // var settings = {
    // zoom: 15,
    // center: latlng,
  // map.fitBounds(bounds);
    // mapTypeId: google.maps.MapTypeId.ROADMAP
  // };
  // var map = new google.maps.Map(document.getElementById('map'), settings)
// }

// go to the LA Metro API to get bus route information
function businfo(route) {
  var baseurl = 'http://api.metro.net/agencies/lametro/routes/';
  var queryURL = baseurl + route + '/sequence';
  console.log("LA Metro API request: ", queryURL);
  var stop = [];
  var latitude = [];
  var longitude = [];

  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {
    for (var i = 0; i < response.items.length; i++) {
      stop.push(response.items[i].display_name);
      latitude.push(response.items[i].latitude);
      longitude.push(response.items[i].longitude);
    };
  }); 
  var thisRouteData = {'stop': stop, 'latitude': latitude, 'longitude': longitude};  
return thisRouteData;
};  // end of function businfo 

var routeSelect = document.getElementById("routeSelect");
var route;

// must select route for anything else to happen
$('#routeSelect').change(function routeChange() {  
  var selectedOptionIndex = routeSelect.options['selectedIndex'];
  if (selectedOptionIndex > 0) {
    route = routeSelect.options[routeSelect.options['selectedIndex']].value;
  };

// if-block for execution of the app update with route stops included
// only go further in the app if one of the valid routes has been selected
  if (validRouteSet.has(route)) {
    // collect stop, latitude, and longitude arrays for this route
    routeData = businfo(route);
    console.log(routeData);
    // var stop = routeData.stop;
    // var latitude = routeData.latitude;
    // var longitude = routeData.longitude;

    // jQuery work to do on the DOM 
    // Build up the floating panel with starting and ending stops for this route

    $("#floating-panel-startSelect").append("<b>Current Stop: </b>");
    $("#floating-panel-startSelect").append('<select id="startSelect">');
    // NEED TO APPEND TO startSelect LIST OF OPTIONS ALL THE STOPS FOR SELECTED ROUTE 
    $("#floating-panel-startSelect").append("<option value></option>");
    for (var i=0; i<routeData.stop.length; i++) {
      $("#floating-panel-startSelect").append('<option value="' + routeData.stop[i] + '">' + routeData.stop[i] + '</option>');
    }
    $("#floating-panel-startSelect").append("</select>");
    
    $("#floating-panel-endSelect").append("<b>Destination: </b>");
    $("#floating-panel-endSelect").append('<select id="endSelect">');
    // NEED TO APPEND TO endSelect LIST OF OPTIONS ALL THE STOPS FOR SELECTED ROUTE 
    $("#floating-panel-endSelect").append("<option value></option>");
    for (var i=0; i<routeData.stop.length; i++) {
      $("#floating-panel-endSelect").append('<option value="' + routeData.stop[i] + '">' + routeData.stop[i] + '</option>');
    }
    $("#floating-panel-endSelect").append("</select>");
     
    // determine the bounding box for the map based on route latitude and longitude arrays
    minLatitude = Math.min(routeData.latitude);
    maxLatitude = Math.max(routeData.latitude);
    minLongitude = Math.min(routeData.longitude);
    maxLongitude = Math.max(routeData.longitude);
    var bounds = new google.maps.LatLngBounds();


    // redraw the map based on the bounding box and the stop points for the seleced route
  } // end of major if-block for running of the app

});



/*
        var infoWindow = new google.maps.InfoWindow({map: map});


        // Condition to grab user  geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

        // if browser doesn't support geolocation it will show an error
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }

*/

