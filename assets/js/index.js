
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

/* ================================ Did you know section ================================ */

/* View background image button */
 $("#fact-button").click(function() {
    $("#button-toggle").toggleClass("show-background");
    $("#facts-bottom").toggleClass("show-background");
 });

/* Question selector */
 $("#question1").click(function() {
    $("#fact-1").css("display","block");
    $("#fact-2").css("display","none");
    $("#fact-3").css("display","none");
 });

$("#question2").click(function() {
    $("#fact-1").css("display","none");
    $("#fact-2").css("display","block");
    $("#fact-3").css("display","none");
 });

$("#question3").click(function() {
    $("#fact-1").css("display","none");
    $("#fact-2").css("display","none");
    $("#fact-3").css("display","block");
 });

/* guessQuestionOne function */

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

/* guessQuestionTwo function */

guessQuestionTwo = function(records) {
    $("#guess2").click(function() {
        $("#instructions2").css("display","none");
        $("#answer-text2").css("display","none");
        $("#giveUp2").css("display","none");
        $("#form-2-year").css("display","block");
        
        var value = document.getElementById("form-2");
        var records = "";

        var i; /* Used code from W3Schools to get this function working (https://www.w3schools.com/js/tryit.asp?filename=tryjs_form_elements) */
        for (i = 0; i < value.length ;i++) {
            records += value.elements[i].value;
            
            if(records == 120) {
                document.getElementById("guess-output2").innerHTML = "That's correct."
            }

            else if(records < 1 && records > -1) {
                document.getElementById("guess-output2").innerHTML = "Come on, have a guess!";
            }

            else if(records < 1 ) {
                document.getElementById("guess-output2").innerHTML = "Number has to be positive. Try again!";
            }

            else if(records > 140) {
                document.getElementById("guess-output2").innerHTML = "Too high. Try again";
            }

            else if(records < 100) {
                document.getElementById("guess-output2").innerHTML = "Too low. Try again";
            }
            
            else if(records < 141 && records > 99) {
                document.getElementById("guess-output2").innerHTML = "Not too far away";
            }

            else {
                document.getElementById("guess-output2").innerHTML = "Please enter a valid number";
            }
        }
    })
}

/* Reveal Answer */
$("#answer2").click(function(){
    $("#form-2-year").css("display","none");
    $("#instructions2").css("display","none");
    $("#giveUp2").css("display","block");
    $("#answer-text2").css("display","block");
    document.getElementById("guess-output2").innerHTML = "";  
});

/* Reset the question so they can guess again */
$("#reset2").click(function(){
    $("#giveUp2").css("display","none");
    $("#instructions2").css("display","block");
    $("#form-2-year").css("display","block");
    $("#answer-text2").css("display","none");
    document.getElementById("guess-output2").innerHTML = "";
    document.getElementById("form-2").reset(); 
});

/* Leg button */
$("#leg").click(function(){
    $("#instructions3").css("display","none");
    document.getElementById("guess-output3").innerHTML = "Nope, try again!";  
});

/* tail button */
$("#tail").click(function(){
    $("#instructions3").css("display","none");
    document.getElementById("guess-output3").innerHTML = "Correct!";  
});

/* toes button */
$("#toes").click(function(){
    $("#instructions3").css("display","none");
    document.getElementById("guess-output3").innerHTML = "Try again!";  
});
        

/* Reveal Answer */
$("#answer3").click(function(){
    $("#form-3-year").css("display","none");
    $("#instructions3").css("display","none");
    $("#leg").css("display","none");
    $("#tail").css("display","none");
    $("#toes").css("display","none");
    $("#giveUp3").css("display","block");
    $("#answer-text3").css("display","block");
    document.getElementById("guess-output3").innerHTML = "";  
});

/* Reset the question so they can guess again */
$("#reset3").click(function(){
    $("#giveUp3").css("display","none");
    $("#instructions3").css("display","block");
    $("#form-3-year").css("display","block");
    $("#answer-text3").css("display","none");
    $("#leg").css("display","inline-block");
    $("#tail").css("display","inline-block");
    $("#toes").css("display","inline-block");
    document.getElementById("guess-output3").innerHTML = "";
    document.getElementById("form-3").reset(); 
});


/* ================================ Things to do section ================================ */
/* View background image button */
 $("#map-button").click(function() {
    $("#map-intro").toggleClass("show-background");
    $("#map").toggleClass("show-background");
    $("#button-heading").toggleClass("show-background");
    $("#location-details-container").toggleClass("show-background");


 });

/* Map */
function initMap(){ /* Got this code from Google Developer, Maps API Marker Clusters section https://developers.google.com/maps/documentation/javascript/marker-clustering */
    
    const mapCenter = {lat: 54.236107, lng: -4.548056};
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 10,
        center: mapCenter,
        }
    );
    
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const markers = locations.map((location, i) => {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length],
        });
    });  

    new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', 
    });
}

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
$("#map-intro, #map, #button-heading, #location-details-container").mouseenter(function(){
    $("#calf-of-man-2").fadeTo(1000, 0.3);
});

$("#map-intro, #map, #button-heading, #location-details-container").mouseleave(function(){
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