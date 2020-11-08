function initMap(){
    const myHome = {lat: 54.152804, lng: -4.497640};
    const map = new google.maps.Map(document.getElementById("map"),{
        zoom: 10,
        center: myHome,
        }
    );


    }