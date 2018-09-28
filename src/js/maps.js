function initMap() {
    var LatLng = {lat: 48.289971, lng: 6.942237};

    var map = new google.maps.Map(document.getElementById('map'), { 
        center: LatLng,
        zoom: 15
    });

    var marker = new google.maps.Marker({
        position: LatLng,
        map: map,
        title: "IUT"
    });

    marker.setMap(map);
}