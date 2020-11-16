function initMap(){
    var myHome = {lat: 54.152804, lng: -4.497640};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 10,
        center: myHome,
        }
    );
    
    const locations = [
        { lat: 54.063889, lng: -4.792477 },
        { lat: 54.223635, lng: -4.393898 },
        { lat: 54.153042, lng: -4.479047 },
        { lat: 54.106170, lng: -4.638335 },
        { lat: 54.226702, lng: -4.392331 },
        { lat: 54.169741, lng: -4.455851 },
        { lat: 54.146948, lng: -4.484625 },
        { lat: 54.152763, lng: -4.478363 },
        { lat: 54.073717, lng: -4.652186 },
        { lat: 54.226539, lng: -4.699166 },
        { lat: 54.238371, lng: -4.407430 },
        { lat: 54.060854, lng: -4.803142 },
    ];
    
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
        });
    });
/*
    var cafes = [
        ['<div class="map-info-window"><h2>The Cafe At The Sound</h2>' + '<i class="fas fa-coffee"></i>'+ '<p><a href="https://www.thesound.im/" target="_blank">View Website</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.063889, -4.792477, 4],
        ['<div class="map-info-window"><h2>The Shed</h2>' + '<i class="fas fa-coffee"></i>'+ '<p><a href="https://www.facebook.com/theshedlaxey/" target="_blank">View on Facebook</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.223635, -4.393898, 3],
        ['<div class="map-info-window"><h2>The Tea Junction</h2>' + '<i class="fas fa-coffee"></i>'+ '<p><a href="https://theteajunction.im/" target="_blank">View Website</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.153042, -4.479047, 2],
        ['<div class="map-info-window"><h2>Silverdale Glen Cafe</h2>' + '<i class="fas fa-coffee"></i>'+ '<p><a href="https://www.facebook.com/SilverdaleGlen/" target="_blank">View on Facebook</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.106170, -4.638335, 1],
    ];

    var restaurants = [
        ['<div class="map-info-window"><h2>La Mona Lisa</h2>' + '<i class="fas fa-utensils"></i>'+ '<p><a href="http://www.lamonalisa.im/" target="_blank">View Website</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.226702, -4.392331, 4],
        ['<div class="map-info-window"><h2>Ocean Views Bar & Grill</h2>' + '<i class="fas fa-utensils"></i>'+ '<p><a href="https://oceanviews.im/" target="_blank">View Website</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.169741, -4.455851, 3],
        ['<div class="map-info-window"><h2>Portofino Restaurant</h2>' + '<i class="fas fa-utensils"></i>'+ '<p><a href="https://www.portofino.im/" target="_blank">View Website</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.146948, -4.484625, 2],
        ['<div class="map-info-window"><h2>Jaks Bar and Stakehouse</h2>' + '<i class="fas fa-utensils"></i>'+ '<p><a href="https://www.jakspub.com/" target="_blank">View on Facebook</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.152763, -4.478363, 1],
    ];

    var sites = [
        ['<div class="map-info-window"><h2>Castle Rushen</h2>' + '<i class="fab fa-fort-awesome"></i>'+ '<p><a href="https://manxnationalheritage.im/our-sites/castle-castletown/" target="_blank">Learn more</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.073717, -4.652186, 4],
        ['<div class="map-info-window"><h2>Peel Castle</h2>' + '<i class="fab fa-fort-awesome"></i>'+ '<p><a href="https://manxnationalheritage.im/our-sites/peel-castle/" target="_blank">Learn more</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.226539, -4.699166, 3],
        ['<div class="map-info-window"><h2>Laxey Wheel</h2>' + '<i class="fab fa-fort-awesome"></i>'+ '<p><a href="https://manxnationalheritage.im/our-sites/laxey-wheel/" target="_blank">Learn more</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.238371, -4.407430, 2],
        ['<div class="map-info-window"><h2>Calf of Mann</h2>' + '<i class="fab fa-fort-awesome"></i>'+ '<p><a href="https://manxnationalheritage.im/visit/stay-with-us/calf-of-man-bird-observatory/" target="_blank">Learn more</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>', 54.060854, -4.803142, 1],
    ];
    
    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < cafes.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(cafes[i][1], cafes[i][2]),
            map: map,
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                map.setZoom(13);
                infowindow.setContent(cafes[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    for (i = 0; i < restaurants.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(restaurants[i][1], restaurants[i][2]),
            map: map,
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                map.setZoom(13);
                infowindow.setContent(restaurants[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

    for (i = 0; i < sites.length; i++) {  
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(sites[i][1], sites[i][2]),
            map: map,
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                map.setZoom(13);
                infowindow.setContent(sites[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
    
*/
    new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', 
    });

    


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