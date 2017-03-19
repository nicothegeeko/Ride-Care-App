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
  
    
    $("#dropdown1").hide();
    $("#dropdown2").hide();

    $(".btn").click(function(){
        $(".container").hide({left: '250px'});
        $("#soundDropdown").show();
        $("#soundDropdown").animate({left: '250px'});
    });

    $(".dropdown-toggle").dropdown();
});


