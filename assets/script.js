
  //queryURL for metro API ROUTES
// function busRoute() {
  // var queryRoute = "https://api.metro.net/agencies/lametro/routes/180/";
  //   $.get(queryRoute, function(data, success, type) {
  //     console.log(data, 'data,!!!!!!!!!!!!!!!!!', success, type)
  //   })
  //    .success(function(response) {
  //     console.log('123412341',response);
  //   }).error(function(err) {
  //     console.log('lskfjlksdjf', err)
  //   })
  
  // var queryURL = "https://api.metro.net/agencies/lametro/routes/180";

  var queryURL = "http://api.metro.net/agencies/lametro/routes/180/stops/";

  $.ajax ({
    url: queryURL,
    method:"GET"
  }).done(function(response){

    console.log(response);

    var results = response.items;

    // var route = response.display_name;

    // $("#test").prepend(route);


    for (var i = 0; i < 10; i++) {
      var route = results[i].display_name;
      // var route = response[i].display_name;
      $("#test").prepend(route);

    }


  });
  

  
$(document).ready(function() {
    
    $(".dropdown").hide();

    $(".btn").click(function(){
        $(".container").hide({left: '250px'});
        $(".dropdown").show();
        $(".dropdown").animate({left: '250px'});
    });

    $(".dropdown-toggle").dropdown();
});


