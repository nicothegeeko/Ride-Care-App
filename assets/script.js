$(document).ready(function() {

(function(){ 
  var form = document.getElementById('userInputForm');       // Get form element

  // on reset move cursor back to username field
  form.addEventListener('reset',function(){
    document.getElementById("username").focus()
  })

  // on submit execute the isUserValid function from validate.js
  form.addEventListener('submit', function(e) {
    e.preventDefault();                              // Stop it being sent
  })

}()); // end of anonymous function for form processing  


	//queryURL for metro API ROUTES
  var busRoute = function() {
    var queryRoute = "https://api.metro.net/agencies/lametro/routes/180/";
      $.get(queryRoute, function(data, success, type) {
        console.log(data, 'data,!!!!!!!!!!!!!!!!!', success, type)
      })
       .success(function(response) {
        console.log('123412341',response);
      }).error(function(err) {
        console.log('lskfjlksdjf', err)
    });
};
 
 /*   
    $(".dropdown").hide();

    $(".btn").click(function(){
        $(".container").hide({left: '250px'});
        $(".dropdown").show();
        $(".dropdown").animate({left: '250px'});
    });

    // $(".dropdown-toggle").dropdown();  // commented out... need to correct error

*/
});
