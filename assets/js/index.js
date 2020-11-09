/*function initMap(){
        const myHome = {lat: 54.152804, lng: -4.497640};
        const map = new google.maps.Map(document.getElementById("map"),{
            zoom: 10,
            center: myHome,
            }
        );


}*/

$("#welcome-box").mouseenter(function(){
    $("#welcome-text").slideToggle(1000);
    $("#bradda-head").fadeTo(1000, 0.3);
});

$("#welcome-box").mouseleave(function(){
    $("#welcome-text").slideToggle(1000);
    $("#bradda-head").fadeTo(1000, 0.8);
});

/* Flips the cards in the basic information section*/
$("#inner-left").hover(function(){
    $("#capital-container").toggleClass("rotate");
});