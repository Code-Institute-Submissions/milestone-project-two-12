function initMap(){
    var myHome = {lat: 54.152804, lng: -4.497640};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 10,
        center: myHome,
        }
    );

    var cafes = [
        ['<div class="map-info-window"><h2>The Cafe At The Sound</h2>' + '<i class="fas fa-coffee"></i>'+ '<p><a href="https://www.thesound.im/" target="_blank">View Website</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.063889, -4.792477, 4],
        ['<div class="map-info-window"><h2>The Shed</h2>' + '<i class="fas fa-coffee"></i>'+ '<p><a href="https://www.facebook.com/theshedlaxey/" target="_blank">View on Facebook</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.223635, -4.393898, 3],
        ['<div class="map-info-window"><h2>The Tea Junction</h2>' + '<i class="fas fa-coffee"></i>'+ '<p><a href="https://theteajunction.im/" target="_blank">View Website</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.153042, -4.479047, 2],
        ['<div class="map-info-window"><h2>Silverdale Glen Cafe</h2>' + '<i class="fas fa-coffee"></i>'+ '<p><a href="https://www.facebook.com/SilverdaleGlen/" target="_blank">View on Facebook</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.106170, -4.638335, 1],
    ];
    
    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < cafes.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(cafes[i][1], cafes[i][2]),
            map: map,
            icon: "http://maps.google.com/mapfiles/kml/paddle/red-circle.png"
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(cafes[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

}



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