var config = {
    apiKey: "AIzaSyBNKDQxtZjk6S7NwtlK0xgNT64ZDh3nx9s",
    authDomain: "ride-care-7c85d.firebaseapp.com",
    databaseURL: "https://ride-care-7c85d.firebaseio.com",
    storageBucket: "ride-care-7c85d.appspot.com",
    messagingSenderId: "625233184128"
<<<<<<< HEAD
  };

firebase.initializeApp(config);

<<<<<<< HEAD
  // Create a variable to reference the database
var database = firebase.database();
=======
          console.log('this password valid? ', thisPasswordValid)
      }

<<<<<<< HEAD
    //AIzaSyCkV6mjFSLSVwZajhV4fWy-76XUHtzEW1E
=======
      else {
          thisPasswordValid = false;
          thisUserValid = false;
          console.log('this password valid? ', thisPasswordValid)
      };
    
    // else {
    //   thisUserValid = false;
    //   thisPasswordValid = null;
    //   console.log('this user valid?', thisUserValid);
    //   console.log('this password valid? ', thisPasswordValid)
    // }  
>>>>>>> 64e954965a91a167ca54958e5f1c32e935a7f430

  
    
    $("#dropdown1").hide();
    $("#dropdown2").hide();
    $("#soundDropdown").hide();
    
    
>>>>>>> 0d7f63f78e1bdcfa4d18dd24de6bf501ff029d21


// Firebase information
// Public-facing name help_outline Ride-Care
// Project ID help_outline ride-care-7c85d
// Web API Key AIzaSyBNKDQxtZjk6S7NwtlK0xgNT64ZDh3nx9s 
// https://ride-care-7c85d.firebaseio.com/ 
$("#sign-in-submit").click(function(event){
  console.log('----- running isUserValid function -----');

  var form = document.getElementById('userInputForm');

  var userInput = form.elements.username.value;    // Select username entered
  var passwordInput = form.elements.password.value; // Select password entered

  var userOK = false;  // initialize Boolean variable
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

  if (thisPasswordValid = true);{
          // passwordValid = true;
          // thisUserValid = true;
          // thisPasswordValid = true;
          
        $(".container").hide({left: '250px'});
        $("#soundDropdown").show();
        $("#dropdown1").show();
        $("#dropdown2").show();
        $("#soundDropdown").animate({left: '250px'});
        $("#logIn-form").remove();
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
      }
      else {
        userOK = false;
        console.log('User OK?', userOK);
        console.log('--------------------------');
        return false;
      }
  });

})

//hide the dropdown menu 
$("#dropdown1").hide();
    $("#dropdown2").hide();
    $("#soundDropdown").hide();    




  
=======
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
$("#soundDropdown").hide();
$("#map").hide();

visualRefresh = true; 

var routeData;  // defined for global scope

// define set of tested routes for the application
var validRoute = ['2', '92', '180', '780'];
var validRouteSet = new Set(validRoute);

function initMap() {
  var latlng = new google.maps.LatLng(34.0397099,-118.55429);
  var settings = {
    zoom: 15,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById('map'), settings)
}

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
    var stop = routeData.stop;
    var latitude = routeData.latitude;
    var longitude = routeData.longitude;

    // jQuery work to do on the DOM
    // NEED TO APPEND TO startSelect LIST OF OPTIONS ALL THE STOPS FOR SELECTED ROUTE 
    // NEED TO APPEND TO endSelect LIST OF OPTIONS ALL THE STOPS FOR SELECTED ROUTE

    // determine the bounding box for the map based on route latitude and longitude arrays
    var minLatitude = Math.min(latitude);
    var maxLatitude = Math.max(latitude);
    var minLongitude = Math.min(longitude);
    var maxLongitude = Math.max(longitude);

    // redraw the map based on the bounding box and the stop points for the seleced route
  } // end of major if-block for running of the app

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

});

>>>>>>> 89ce68770832ad7813926adee9814a6877baa415




