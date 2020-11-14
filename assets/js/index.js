/*function initMap(){
        const myHome = {lat: 54.152804, lng: -4.497640};
        const map = new google.maps.Map(document.getElementById("map"),{
            zoom: 10,
            center: myHome,
            }
        );


}*/
/* Display the welcome text and fade the background picture */
$("#welcome-box").mouseenter(function(){
    $("#welcome-text").slideToggle(1000);
    $("#bradda-head").fadeTo(1000, 0.3);
});

$("#welcome-box").mouseleave(function(){
    $("#welcome-text").slideToggle(1000);
    $("#bradda-head").fadeTo(1000, 0.8);
});

/* Flips the cards in the basic information section*/
$("#capital").click(function(){
    $("#capital-container").toggleClass("rotate");
});

$("#population").click(function(){
    $("#population-container").toggleClass("rotate");
});

$("#language").click(function(){
    $("#language-container").toggleClass("rotate");
});

$("#flag").click(function(){
    $("#flag-container").toggleClass("rotate");
});

$("#currency").click(function(){
    $("#currency-container").toggleClass("rotate");
});

$("#nationality").click(function(){
    $("#nationality-container").toggleClass("rotate");
});

$("#climate").click(function(){
    $("#climate-container").toggleClass("rotate");
});

$("#government").click(function(){
    $("#government-container").toggleClass("rotate");
});

$("#workpermit").click(function(){
    $("#workpermit-container").toggleClass("rotate");
});

$("#basic-info-inner").mouseleave(function(){
    $("#capital-container").removeClass("rotate");
    $("#population-container").removeClass("rotate");
    $("#language-container").removeClass("rotate");
    $("#flag-container").removeClass("rotate");
    $("#currency-container").removeClass("rotate");
    $("#nationality-container").removeClass("rotate");
    $("#climate-container").removeClass("rotate");
    $("#government-container").removeClass("rotate");
    $("#workpermit-container").removeClass("rotate");
});