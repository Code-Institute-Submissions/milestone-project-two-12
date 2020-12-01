
/* ================================ Welcome section ================================ */
/* Display the welcome text and fade the background picture */
$("#welcome-box").mouseenter(function(){
    $("#welcome-text").slideToggle(1000);
    $("#bradda-head").fadeTo(1000, 0.3);
});

$("#welcome-box").mouseleave(function(){
    $("#welcome-text").slideToggle(1000);
    $("#bradda-head").fadeTo(1000, 0.8);
});


/* ================================ Basic info section ================================ */
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

/* Fading the background on the facts section */
$("#facts-bottom").mouseenter(function(){
    $("#niarbyl").fadeTo(1000, 0.3);
});

$("#facts-bottom").mouseleave(function(){
    $("#niarbyl").fadeTo(1000, 0.8);
});

/* ================================ Did you know section, guess the year IoM gave women the right to vote ================================ */
guessQuestionOne = function(year) {
    $("#guess1").click(function() {
        $("#instructions1").css("display","none");
        $("#answer-text1").css("display","none");
        $("#giveUp1").css("display","none");
        $("#form-1-year").css("display","block");
        
        var value = document.getElementById("form-1");
        var year = "";

        var i; /* Used code from W3Schools to get this function working (https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_elements) */
        for (i = 0; i < value.length ;i++) {
            year += value.elements[i].value;
            
            if(year == 1881) {
                document.getElementById("guess-output1").innerHTML = "That's correct."
            }

            else if(year < 1 && year > -1) {
                document.getElementById("guess-output1").innerHTML = "Come on, have a guess!";
            }

            else if(year > 2020) {
                document.getElementById("guess-output1").innerHTML = "Hint: It's already happened!";
            }

            else if(year > 2100) {
                document.getElementById("guess-output1").innerHTML = "Now you are being silly";
            }

            else if(year < 0 ) {
                document.getElementById("guess-output1").innerHTML = "Can't have a negative year!";
            }

            else if(year - 1881 < 2 && year - 1881 > -2 ) {
                document.getElementById("guess-output1").innerHTML = "So close! You're within one year";
            }

            else if(year - 1881 < 3 && year - 1881 > -3 ) {
                document.getElementById("guess-output1").innerHTML = "Almost! You're within two years";
            }

            else if(year - 1881 < 4 && year - 1881 > -4 ) {
                document.getElementById("guess-output1").innerHTML = "Good guess! You're within three years";
            }

            else if(year - 1881 < 5 && year - 1881 > -5 ) {
                document.getElementById("guess-output1").innerHTML = "Good guess! You're within four years";
            }

            else if(year - 1881 < 6 && year - 1881 > -6 ) {
                document.getElementById("guess-output1").innerHTML = "Almost! You're within five years";
            }

            else if(year - 1881 < 11 && year - 1881 > -11 ) {
                document.getElementById("guess-output1").innerHTML = "You're within ten years";
            }

            else if(year - 1881 < 21 && year - 1881 > -21 ) {
                document.getElementById("guess-output1").innerHTML = "You're within twenty years";
            }

            else if(year - 1881 < 31 && year - 1881 > -31 ) {
                document.getElementById("guess-output1").innerHTML = "You're within thirty years";
            }

            else if(year - 1881 < 41 && year - 1881 > -41 ) {
                document.getElementById("guess-output1").innerHTML = "You're within fourty years";
            }

            else if(year - 1881 < 51 && year - 1881 > -51 ) {
                document.getElementById("guess-output1").innerHTML = "You're within fifty years";
            }

            else if(year < 1832 ) {
                document.getElementById("guess-output1").innerHTML = "Much later. Try again";
            }

            else if(year > 1930) {
                document.getElementById("guess-output1").innerHTML = "Much earlier. Try again";
            }

            else {
                document.getElementById("guess-output1").innerHTML = "Please enter a valid year";
            }
        }
    })
}

/* Reveal Answer */
$("#answer1").click(function(){
    $("#form-1-year").css("display","none");
    $("#instructions1").css("display","none");
    $("#giveUp1").css("display","block");
    $("#answer-text1").css("display","block");
    document.getElementById("guess-output1").innerHTML = "";  
});

/* Reset the question so they can guess again */
$("#reset1").click(function(){
    $("#giveUp1").css("display","none");
    $("#instructions1").css("display","block");
    $("#form-1-year").css("display","block");
    $("#answer-text1").css("display","none");
    document.getElementById("guess-output1").innerHTML = "";
    document.getElementById("form-1").reset(); 
});




/* ================================ Things to do section ================================ */
 /* Map */
function initMap(){
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    var mapCenter = {lat: 54.236107, lng: -4.548056};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom: 10,
        center: mapCenter,
        }
    );
    directionsRenderer.setMap(map);

    const onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };
    document.getElementById("from").addEventListener("change", onChangeHandler);
    document.getElementById("to").addEventListener("change", onChangeHandler);

    var Douglas = new google.maps.LatLng(54.153042, -4.479047);
    var Onchan = new google.maps.LatLng(54.169741, -4.455851);

    const locations = [
        { lat: 54.063889, lng: -4.792477 }, /* (A) The Cafe At The Sound */
        { lat: 54.223635, lng: -4.393898 }, /* (B) The Shed */
        { lat: 54.153042, lng: -4.479047 }, /* (C) The Tea Junction */
        { lat: 54.106170, lng: -4.638335 }, /* (D) Silverdale Glen Cafe */
        { lat: 54.226702, lng: -4.392331 }, /* (E) La Mona Lisa */
        { lat: 54.169741, lng: -4.455851 }, /* (F) Ocean Views Bar & Grill */
        { lat: 54.146948, lng: -4.484625 }, /* (G) Portofino Restaurant */
        { lat: 54.152763, lng: -4.478363 }, /* (H) Jaks Bar and Stakehouse */
        { lat: 54.073717, lng: -4.652186 }, /* (I) Castle Rushen */
        { lat: 54.226539, lng: -4.699166 }, /* (J) Peel Castle */
        { lat: 54.238371, lng: -4.407430 }, /* (K) Laxey Wheel */
        { lat: 54.060854, lng: -4.803142 }, /* (L) Calf of Mann */
    ];
    
    var locationInfo = [
        ['<div class="map-info-window"><h2>The Cafe At The Sound</h2>' + '<i class="fas fa-coffee"></i>'+ '<p><a href="https://www.thesound.im/" target="_blank">View Website</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>'],
        ['<div class="map-info-window"><h2>The Shed</h2>' + '<i class="fas fa-coffee"></i>'+ '<p><a href="https://www.facebook.com/theshedlaxey/" target="_blank">View on Facebook</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>'],
        ['<div class="map-info-window"><h2>The Tea Junction</h2>' + '<i class="fas fa-coffee"></i>'+ '<p><a href="https://theteajunction.im/" target="_blank">View Website</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>'],
        ['<div class="map-info-window"><h2>Silverdale Glen Cafe</h2>' + '<i class="fas fa-coffee"></i>'+ '<p><a href="https://www.facebook.com/SilverdaleGlen/" target="_blank">View on Facebook</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>'],
    
        ['<div class="map-info-window"><h2>La Mona Lisa</h2>' + '<i class="fas fa-utensils"></i>'+ '<p><a href="http://www.lamonalisa.im/" target="_blank">View Website</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>'],
        ['<div class="map-info-window"><h2>Ocean Views Bar & Grill</h2>' + '<i class="fas fa-utensils"></i>'+ '<p><a href="https://oceanviews.im/" target="_blank">View Website</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>'],
        ['<div class="map-info-window"><h2>Portofino Restaurant</h2>' + '<i class="fas fa-utensils"></i>'+ '<p><a href="https://www.portofino.im/" target="_blank">View Website</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>'],
        ['<div class="map-info-window"><h2>Jaks Bar and Stakehouse</h2>' + '<i class="fas fa-utensils"></i>'+ '<p><a href="https://www.jakspub.com/" target="_blank">View on Facebook</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>'],
    
        ['<div class="map-info-window"><h2>Castle Rushen</h2>' + '<i class="fab fa-fort-awesome"></i>'+ '<p><a href="https://manxnationalheritage.im/our-sites/castle-castletown/" target="_blank">Learn more</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>'],
        ['<div class="map-info-window"><h2>Peel Castle</h2>' + '<i class="fab fa-fort-awesome"></i>'+ '<p><a href="https://manxnationalheritage.im/our-sites/peel-castle/" target="_blank">Learn more</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>'],
        ['<div class="map-info-window"><h2>Laxey Wheel</h2>' + '<i class="fab fa-fort-awesome"></i>'+ '<p><a href="https://manxnationalheritage.im/our-sites/laxey-wheel/" target="_blank">Learn more</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>'],
        ['<div class="map-info-window"><h2>Calf of Mann</h2>' + '<i class="fab fa-fort-awesome"></i>'+ '<p><a href="https://manxnationalheritage.im/visit/stay-with-us/calf-of-man-bird-observatory/" target="_blank">Learn more</a></p>'+'<br>' +'<p><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star-half"></i></p></div>'],
    ];
    
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
        content: locationInfo[i]
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

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
  directionsService.route(
    {
      origin: {
        query: document.getElementById("from").value,
      },
      destination: {
        query: document.getElementById("to").value,
      },
      travelMode: google.maps.TravelMode.DRIVING,
    },
    (response, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(response);
      } else {
        window.alert("Directions request failed due to " + status);
      }
    }
  );
}


/* Map buttons */
$("#button-a").click(function(){
    $(".location").css("display","none");
    $("#sound-cafe").css("display","inline-block");
});

$("#button-b").click(function(){
    $(".location").css("display","none");
    $("#shed-cafe").css("display","inline-block");
});

$("#button-c").click(function(){
    $(".location").css("display","none");
    $("#tea-junction").css("display","inline-block");
});

$("#button-d").click(function(){
    $(".location").css("display","none");
    $("#silverdale").css("display","inline-block");
});

$("#button-e").click(function(){
    $(".location").css("display","none");
    $("#mona-lisa").css("display","inline-block");
});

$("#button-f").click(function(){
    $(".location").css("display","none");
    $("#views").css("display","inline-block");
});

$("#button-g").click(function(){
    $(".location").css("display","none");
    $("#portofino").css("display","inline-block");
});

$("#button-h").click(function(){
    $(".location").css("display","none");
    $("#jaks").css("display","inline-block");
});


$("#button-i").click(function(){
    $(".location").css("display","none");
    $("#castle-rushen").css("display","inline-block");
});

$("#button-j").click(function(){
    $(".location").css("display","none");
    $("#peel-castle").css("display","inline-block");
});

$("#button-k").click(function(){
    $(".location").css("display","none");
    $("#laxey-wheel").css("display","inline-block");
});

$("#button-l").click(function(){
    $(".location").css("display","none");
    $("#calf-of-man").css("display","inline-block");
});

/*  Fading the background on the map section  */
$("#map-container").mouseenter(function(){
    $("#calf-of-man-2").fadeTo(1000, 0.3);
});

$("#map-container").mouseleave(function(){
    $("#calf-of-man-2").fadeTo(1000, 0.8);
});

/* ================================ Contact section ================================ */
/* Fading the background on the contact section  */
$("#contact-form-container").mouseenter(function(){
    $("#dragon-rock").fadeTo(1000, 0.3);
});

$("#contact-form-container").mouseleave(function(){
    $("#dragon-rock").fadeTo(1000, 0.8);
});