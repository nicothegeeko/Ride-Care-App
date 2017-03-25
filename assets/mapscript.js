// visualRefresh = true; 

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

function routeMap() {
  // route map center based on latitude and longitude arrays
  var routePoints = [
     new google.maps.LatLng(34.0397099, -118.55429),
     new google.maps.LatLng(34.0334999, -118.26514)
  ];
  var routeLine = new google.maps.Polyline({
    path: routePoints,
    strokeColor: "black",
    strokeWeight: 2,
    strokeOpacity: 0.75
  });
  routeLine.setMap(map);
  
  var location = (34.0397099, -118.55429);
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
    console.log('routeData object for selected route:');
    console.log(routeData);

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

// MAP WORKS WITH DIRECT ENTRIES OF VALUES... NEED TO AUTOMATE IN LOOP 
       var busLine = [     
           new google.maps.LatLng(34.03339791, -118.15446943),
           new google.maps.LatLng(34.03336123, -118.1612058),
           new google.maps.LatLng(34.03331678, -118.16813663),
           new google.maps.LatLng(34.03428813, -118.19218934),
           new google.maps.LatLng(34.04375653, -118.21005285),
           new google.maps.LatLng(34.04720579, -118.21963906),
           new google.maps.LatLng(34.04763249, -118.22592616),
           new google.maps.LatLng(34.05008155, -118.23788881),
           new google.maps.LatLng(34.05620609, -118.23429465),
           new google.maps.LatLng(34.08095756, -118.22042227),
           new google.maps.LatLng(34.08722649, -118.21319640),
           new google.maps.LatLng(34.09020307, -118.2112813),
           new google.maps.LatLng(34.09825263, -118.2067001),
           new google.maps.LatLng(34.11116054, -118.1926989),
           new google.maps.LatLng(34.1335071, -118.14810455),
           new google.maps.LatLng(34.14191661, -118.1482172),
           new google.maps.LatLng(34.14832753, -118.1474340),
           new google.maps.LatLng(34.1518036, -118.13137829),
           new google.maps.LatLng(34.15240735, -118.114330),
           new google.maps.LatLng(34.14774151, -118.081205)
        ];
 
// THIS IS NOT WORKING....  NEED TO FIX  
//      var busLine = [];
//      for (var i = 0; i<routeData.latitude.length; i++) {
//        busline.push(new google.maps.LatLng(routeData.latitude[i], routeData.longitude[i]));
//      }
//      console.log("busLine array :", busLine)



        var stations = routeData.stop;
        console.log("stations/stops: ", stations)

        var markers = [];


        function newMap() {
            var iniLat = 34.10;
            var iniLon = -118.15;
            var iniZoom = 12;
            var myLatlng = new google.maps.LatLng(iniLat, iniLon);
            var mapOptions = {
                zoom: iniZoom, center: myLatlng, mapTypeId: google.maps.MapTypeId.SATELLITE, panControl: false,
                zoomControl: true, scaleControl: true, streetViewControl: false, overviewMapControl: false,
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR, position: google.maps.ControlPosition.BOTTOM_CENTER
            }
 //           map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
            map = new google.maps.Map(document.getElementById("map"), mapOptions);
            var path = new google.maps.MVCArray(busLine);
            var line = new google.maps.Polyline({ map: map, path: path, strokeColor: 'orange' });

            for (iStation = 0; iStation < stations.length; iStation++) {
                addLabel(busLine[iStation], stations[iStation]);
            }
        }

        function addLabel(location, title) {
            var div = document.createElement('DIV');
            div.innerHTML = title;
            div.className = 'divStyle';
            var newLabel = new RichMarker({
                map: map,
                position: location,
                draggable: true,
                flat: false,
                anchor: RichMarkerPosition.TOP_LEFT,
                content: div
            });
        }



    newMap();

  } // end of major if-block for running of the app

});




















