$(document).ready(function() {

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

if (thisPasswordValid = true thisUserValid = true) {
          // passwordValid = true;
          // thisUserValid = true;
          // thisPasswordValid = true;

          
        $(".container").hide({left: '250px'});
        $("#soundDropdown").show();
        $("#dropdown1").show();
        $("#dropdown2").show();
        $("#soundDropdown").animate({left: '250px'});
        $("#logIn-form").hide();

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
    
    

    // $(".btn").click(function(){
    //     $(".container").hide({left: '250px'});
    //     $("#soundDropdown").show();
    //     $("#dropdown1").show();
    //     $("#dropdown2").show();
    //     $("#soundDropdown").animate({left: '250px'});
    //     $("#logIn-form").hide();
       


    // });

    //$(".btn").click (function load() 
    //{ 
        //var mapDiv = document.getElementById("map");

      //});

    $(".dropdown-toggle").dropdown();

});
    // AIzaSyCkV6mjFSLSVwZajhV4fWy-76XUHtzEW1E

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

  



