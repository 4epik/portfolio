window.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 55.8069024, lng: 37.4937301},
    zoom: 15,
    disableDefaultUI: true,
    gestureHandling: 'cooperative',
    styles:[
      {
        "featureType": "poi.park",
        "stylers": [
          { "color": "#86a77a" }
        ]
      },{
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
          { "color": "#d6d6d6" }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
          { "color": "#d6d6d6" }
        ]
      },{
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
          { "color": "#aeaeae" }
        ]
      },{
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
          { "color": "#d6d6d6" }
        ]
      },{
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
          { "color": "#f2f2f2" }
        ]
      },{
        "featureType": "transit",
        
        "stylers": [
          { "visibility": "off" }
        ]
      }

    ]
  });
}


module.exports = initMap;
