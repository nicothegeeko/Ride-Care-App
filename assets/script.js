$(document).ready(function() {
    
    $(".dropdown").hide();

    $(".btn").click(function(){
        $(".container").hide({left: '250px'});
        $(".dropdown").show();
        $(".dropdown").animate({left: '250px'});
    });

    $(".dropdown-toggle").dropdown();
});


