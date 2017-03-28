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

        // if browser doesn't support geolocation it will show an error
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }

        // Display Transit layer for LA bus route
        var transitLayer = new google.maps.TransitLayer();
        transitLayer.setMap(map);
      }

