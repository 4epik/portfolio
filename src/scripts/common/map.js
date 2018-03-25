function initMap() {


    var uluru = {lat: 55.809425, lng: 37.491277};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: uluru
    });
  
  }