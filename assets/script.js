  //queryURL for metro API ROUTES
function busRoute() {
  var queryRoute = "https://api.metro.net/agencies/lametro/routes/180/";
    $.get(queryRoute, function(data, success, type) {
      console.log(data, 'data,!!!!!!!!!!!!!!!!!', success, type)
    })
     .success(function(response) {
      console.log('123412341',response);
    }).error(function(err) {
      console.log('lskfjlksdjf', err)
    })
  
  
}

var config = {
    apiKey: "AIzaSyBNKDQxtZjk6S7NwtlK0xgNT64ZDh3nx9s",
    authDomain: "ride-care-7c85d.firebaseapp.com",
    databaseURL: "https://ride-care-7c85d.firebaseio.com",
    storageBucket: "ride-care-7c85d.appspot.com",
    messagingSenderId: "625233184128"
};

firebase.initializeApp(config);


// Create a variable to reference the database
var database = firebase.database();


// Firebase information
// Public-facing name help_outline Ride-Care
// Project ID help_outline ride-care-7c85d
// Web API Key AIzaSyBNKDQxtZjk6S7NwtlK0xgNT64ZDh3nx9s 
// https://ride-care-7c85d.firebaseio.com/ 
$("#sign-in-submit").click(function(event) {
    console.log('----- running isUserValid function -----');

    var form = document.getElementById('userInputForm');

    var userInput = form.elements.username.value; // Select username entered
    var passwordInput = form.elements.password.value; // Select password entered

    var userOK = false; // initialize Boolean variable
    var ref = database.ref("users");

    // VERIFY USER INFORMATION
    // var userInput = prompt('enter user name: '); // used in testing only
    // var passwordInput = prompt('enter password: ')  // used in testing only

    // var userInput = 'tom'; // used for testing
    // var passwordInput = 'tom';  // used for testing

    // initialize Boolean variables
    var userValid = false;
    var passwordValid = false;

    var thisUserValid = false;
    var thisPasswordValid = false;


    if (thisPasswordValid = true); {
        

        $(".container").hide({ left: '250px' });
        $(".logo").hide();
        $("#soundDropdown").show();
        $("#floating-panel-routes").show();
        $("#floating-panel-startSelect").show();
        $("#floating-panel-endSelect").show();
        $("#soundDropdown").animate({ left: '250px' });
        $("#logIn-form").remove();
        $("#map").show();
        console.log('this password valid? ', thisPasswordValid)
    }


    ref.on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var userData = childSnapshot.val();
            // console.log('user: ', userData.user);
            // console.log('password: ', userData.password);
            if (userInput === userData.user) {

                thisUserValid = true;
                userValid = true;
                console.log('this user valid?', thisUserValid);

                if (passwordInput === userData.password) {
                    passwordValid = true;
                    thisPasswordValid = true;
                    console.log('this password valid? ', thisPasswordValid);
                } else {
                    thisPasswordValid = false;
                    console.log('this password valid? ', thisPasswordValid);
                }
            } else {
                thisUserValid = false;
                thisPasswordValid = null;
                console.log('this user valid?', thisUserValid);
                console.log('this password valid? ', thisPasswordValid)
            }
        });
        // alert('check user and password now'); 
        console.log('--------------------------');
        console.log('userValid: ', userValid);
        console.log('passwordValid: ', passwordValid);
        if (userValid && passwordValid) {
            userOK = true;
            console.log('User OK?', userOK);
            console.log('--------------------------');
            return true;
        } else {
            userOK = false;
            console.log('User OK?', userOK);
            console.log('--------------------------');
            return false;
        }
    });

})




//hide the dropdown menu 
$("#floating-panel-routes").hide();
$("#floating-panel-startSelect").hide();
$("#floating-panel-endSelect").hide();
$("#soundDropdown").hide();
$("#map").hide();

visualRefresh = true; 

var routeData;  // defined for global scope

// define set of tested routes for the application
var validRoute = ['2', '92', '180', '780'];
var validRouteSet = new Set(validRoute);

// Initiate Map to display google maps
function initMap() {

  // if browser doesn't support geolocation it will show an error
  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: {lat: 34.052235, lng: -118.243683}
  });

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
  // Display Transit layer for LA bus route
  var transitLayer = new google.maps.TransitLayer();
  transitLayer.setMap(map);
}

// functions for working with sets
// source: https://developer.mozilla.org/
//         en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Set.prototype.isSuperset = function(subset) {
    for (var elem of subset) {
        if (!this.has(elem)) {
            return false;
        }
    }
    return true;
}

Set.prototype.union = function(setB) {
    var union = new Set(this);
    for (var elem of setB) {
        union.add(elem);
    }
    return union;
}

Set.prototype.intersection = function(setB) {
    var intersection = new Set();
    for (var elem of setB) {
        if (this.has(elem)) {
            intersection.add(elem);
        }
    }
    return intersection;
}

Set.prototype.difference = function(setB) {
    var difference = new Set(this);
    for (var elem of setB) {
        difference.delete(elem);
    }
    return difference;
}

// visualRefresh = true; 

// For the demo slides in the presentation we showed four routes (2, 92, 180, 780)
// we showed results for route 780 only 
// There is much work to be done to finish this app
// See Future Work comments below

var routeData;  // defined for global scope
// global definition for google maps work (not using var here)
// window.map; // = new google.maps.Map(document.getElementById('map'));
var map; // declare gobal object to be used later for map work; 

// define set of tested routes for the application
var validRoute = ['2', '92', '180', '780'];
var validRouteSet = new Set(validRoute);

function initMap() {
  // initial map center based on LA 34.052235, -118.243683
  var settings = {
    zoom: 15,
    center: new google.maps.LatLng(34.052235,-118.243683), 
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
//  map = new google.maps.Map(document.getElementById('map'), settings);
  map = new google.maps.Map(document.getElementById('map')); 
  map.setOptions(settings); 
};

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

// Future Work: These two lines of material need to be moved out of the businfo function
// so that users may change route selection after first route selected
      $("#startSelect").append("<option value=''>" + response.items[i].display_name + "</option>");
      $("#endSelect").append("<option value=''>" + response.items[i].display_name + "</option>");   
    };
  }); 
  var thisRouteData = {'stop': stop, 'latitude': latitude, 'longitude': longitude};  
return thisRouteData;
};  // end of function businfo 

// define route as global variable
var routeSelect = document.getElementById("routeSelect");
var route;

// define starting/current/boarding stop as global variable
var startSelect = document.getElementById("startSelect");
var start;

// define ending/destination stop as global variable
var endSelect = document.getElementById("endSelect");
var end;

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
    console.log('routeData object for selected route:');
    console.log(routeData);

// Future Work: jQuery work to do on the DOM 
// Build up the floating panel with starting and ending stops for any route selected.
// Also, if a rider selects one route and then another, we need gather stops
// associated with the new route selected.
// Currently, with the updating being done within the businfo function,
// we have no way to update the route selection. The code below was an attempt
// to move the route selection code outside of the businfo function.
//   $("#floating-panel-startSelect").append("<b>Current Stop: </b>");
//   $("#floating-panel-startSelect").append('<select id="startSelect">');
// NEED TO APPEND TO startSelect LIST OF OPTIONS ALL THE STOPS FOR SELECTED ROUTE 
//    $("#floating-panel-startSelect").append("<option value></option>");
//    for (var i=0; i<routeData.stop.length; i++) {
//      $("#floating-panel-startSelect").append('<option value="' + routeData.stop[i] + '">' + routeData.stop[i] + '</option>');
//    };
//    $("#floating-panel-startSelect").append("</select>");
    
//   $("#floating-panel-endSelect").append("<b>Destination: </b>");
//   $("#floating-panel-endSelect").append('<select id="endSelect">');
// NEED TO APPEND TO endSelect LIST OF OPTIONS ALL THE STOPS FOR SELECTED ROUTE 
//   $("#floating-panel-endSelect").append("<option value></option>");
//   for (var i=0; i<routeData.stop.length; i++) {
//     $("#floating-panel-endSelect").append('<option value="' + routeData.stop[i] + '">' + routeData.stop[i] + '</option>');
//   };
//   $("#floating-panel-endSelect").append("</select>");

// Future Work: Need to automate the generation of route plotting on map
// MAP WORKS WITH DIRECT ENTRIES OF VALUES... NEED TO AUTOMATE IN LOOP 
// Manually enter route 780 here
// Also note that after 24 stops were entered, even the individually/manually
// entered stops failed to work...  route 780 actually has 32 stops
// we commented out 8 stops here in order to get the path to work
// This may be a limitation of the Google Maps Polyline method... not sure.
// If this is a limitation of Polyline, then multiple Polylines would be
// needed to implement each bus route.
var busLine = [     
  new google.maps.LatLng(34.1458499, -118.12002),
  new google.maps.LatLng(34.1460999, -118.1215599),
  new google.maps.LatLng(34.1460199, -118.13263),
  new google.maps.LatLng(34.1459699, -118.1417),
 new google.maps.LatLng(34.1458999, -118.1507),
 new google.maps.LatLng(34.14586,  -118.16052),
  new google.maps.LatLng(34.1380399,  -118.18801),
 new google.maps.LatLng(34.1393199, -118.21448),
 new google.maps.LatLng(34.1421799, -118.2227199),
 // new google.maps.LatLng(34.1463099, -118.23561),
 new google.maps.LatLng(34.1464699, -118.24692),
 new google.maps.LatLng(34.1464099, -118.25533),
 // new google.maps.LatLng(34.14235, -118.2580399),
 new google.maps.LatLng(34.1287799, -118.2586),
 new google.maps.LatLng(34.1175, -118.2718099),
 // new google.maps.LatLng(34.1019099, -118.29312),
 new google.maps.LatLng(34.1018899, -118.3007999),
 new google.maps.LatLng(34.1018599, -118.3090099),
 // new google.maps.LatLng(34.1017599, -118.32699),
 new google.maps.LatLng(34.1016899, -118.33901),
 new google.maps.LatLng(34.09778, -118.3616899),
 // new google.maps.LatLng(34.0905599, -118.36162),
 new google.maps.LatLng(34.08356, -118.36159),
 new google.maps.LatLng(34.0762399, -118.36157),
 // new google.maps.LatLng(34.07122, -118.3616199),
 new google.maps.LatLng(34.0625799, -118.3618),
 new google.maps.LatLng(34.0577399, -118.36421),
 // new google.maps.LatLng(34.05139, -118.3667999),
 new google.maps.LatLng(34.0395199, -118.36967),
  new google.maps.LatLng(34.0356499, -118.3687399),
//  new google.maps.LatLng(34.03482, -118.3692899),
 new google.maps.LatLng(34.0352799 -118.36907)
];

// with the station/stop names we also entered only 24 stops
var stations = [
  "Colorado / Hill Layover",
  "Colorado / Hill",
  "Colorado / Lake",
  "Colorado / Los Robles",
 "Colorado / Fair Oaks",
  "Colorado / Orange Grove",
  "Colorado / Figueroa",
  "Colorado / Eagle Rock",
  "Colorado / Sierra Villa",
//  "Broadway / Verdugo",
  "Broadway / Glendale",
  "Broadway / Brand",
//  "Central / Colorado",
  "Los Feliz / San Fernando",
  "Los Feliz / Griffith Park",
//  "Hollywood / New Hampshire",
  "Hollywood / Normandie",
  "Hollywood / Western",
//  "Hollywood / Vine",
  "Hollywood / Highland",
  "Fairfax / Sunset",
//  "Fairfax / Santa Monica",
  "Fairfax / Melrose",
  "Fairfax / Beverly",
//  "Fairfax / 3rd",
  "Fairfax / Wilshire",
  "Fairfax / Olympic",
//  "Fairfax / Pico",
  "Fairfax / Venice",
  "Washington Fairfax Hub",
 // "Washington / Fairfax",
  "Washington Fairfax Terminal"
];

        var markers = [];

        function newMap() {
            var iniLat = 34.1464099;
            var iniLon = -118.25533;
            var iniZoom = 12;
            var myLatlng = new google.maps.LatLng(iniLat, iniLon);
            var mapOptions = {
                zoom: iniZoom, center: myLatlng, 
                mapTypeId: google.maps.MapTypeId.ROADMAP, 
                panControl: false,
                zoomControl: true, scaleControl: true, 
                streetViewControl: false, 
                overviewMapControl: false,
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR, 
                position: google.maps.ControlPosition.BOTTOM_CENTER
            }
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
            var path = new google.maps.MVCArray(busLine);
            var line = new google.maps.Polyline({ map: map, path: path, strokeColor: 'black',
              strokeWeight: 4 });

// Future Work. Add markers and labels to a subset of the stops... 
// At the very least, add labels to the starting/current/boarding stop
// the ending/destination stop, and the stop immediately before the ending/destination.
            // for (iStation = 0; iStation < stations.length; iStation++) {
                // addLabel(busLine[iStation], stations[iStation]);
            // }
        }

// Future Work. This is a potential function for adding markers and labels.
        // function addLabel(location, title) {
            // var div = document.createElement('DIV');
            // div.innerHTML = title;
            // div.className = 'divStyle';
            // var newLabel = new RichMarker({
                // map: map,
                // position: location,
                // draggable: true,
                // flat: false,
                // anchor: RichMarkerPosition.TOP_LEFT,
                // content: div
            // });
        // }

newMap()  // here we update the map drawing using the function to plot the route

// Future Work. After the stops have been selected we determine the direction
// of travel (up or down the route array/list) based on current and destination stops.
// We identify the next-to-destination stop. We sense the location of the rider, and 
// continuously compute the distance of the rider to the next-to-destination stop.
// We generate a warning sound/vibration/screen notification when that distance
// has been reached. We should also provide a simple mechanism for the rider
// to turn off the alarm/vibration/screen notification.
// This is the heart of the application, which involves much additional work.

// During the presentation we provided an outline of this application logic.
// Unfortunately, we ran out of time in actually implementing the logic.

// Future Work. Commented out here due to callbacks interfering with other map work
// identify starting/current/boarding stop based on drop-down selection
// $('#startSelect').change(function startChange() {  
  // var selectedOptionIndex = startSelect.options['selectedIndex'];
  // if (selectedOptionIndex > 0) {
    // start = startSelect.options[startSelect.options['selectedIndex']].value;
  // };

// Future Work. Commented out here due to callbacks interfering with other map work
// identify ending/destination stop based on drop-down selection
// $('#endSelect').change(function endChange() {  
  // var selectedOptionIndex = startSelect.options['selectedIndex'];
  // if (selectedOptionIndex > 0) {
    // end = endSelect.options[endSelect.options['selectedIndex']].value;
  // };


};

});


