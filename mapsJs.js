function initMap() {
 
  var options = {
    zoom: 12,
    
    /*higher more depht*/
    center: {
      lat: 23.0225,
      lng: 72.5714
    },
    
    styles: [

      {
        "elementType": "geometry",
        "stylers": [{
          "color": "#242f3e"
        }]
      },
      {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#746855"
        }]
      },
      {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#242f3e"
        }]
      },
      {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      },
      {
        "featureType": "poi",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#263c3f"
        }]
      },
      {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#6b9a76"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [{
          "color": "#38414e"
        }]
      },
      {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#212a37"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9ca5b3"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#746855"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [{
          "color": "#1f2835"
        }]
      },
      {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#f3d19c"
        }]
      },
      {
        "featureType": "transit",
        "stylers": [{
          "visibility": "off"
        }]
      },
      {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [{
          "color": "#2f3948"
        }]
      },
      {
        "featureType": "transit.station",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#d59563"
        }]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#17263c"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#515c6d"
        }]
      },
      {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#17263c"
        }]
      }
    ]


  }
  var map = new google.maps.Map(document.getElementById('map'), options);
  var markers = new Array();

  //Marker code
  addMarker({
    content: '<h3>The Ellis Bridge Gymkhana<h5 style="margin-top:-10px">near law garden,&nbsp;&nbsp;Ahmedabad</h5><h3>',
    coords: {
      lat: 23.0238201,
      lng: 72.5579489
    },

  });

  addMarker({
    coords: {
      lat: 23.0741254,
      lng: 72.5047445
    },
    content: '<h3>Gulmohar Greens<h5 style="margin-top:-10px">Thaltej,&nbsp;&nbsp;Ahmedabad</h5><h3>',
  });

  addMarker({
    coords: {
      lat: 23.0386861,
      lng: 72.5021108
    },
    content: '<h3>The Cafe Baraco<h5 style="margin-top:-10px">Sindhu bhavan,&nbsp;&nbsp;Ahmedabad</h5><h3>',
  });
  addMarker({
    coords: {
      lat: 23.0116583,
      lng: 72.5132806
    },
    content: '<h3>The Cafe Baraco<h5 style="margin-top:-10px">Prahladnagar,&nbsp;&nbsp;Ahmedabad</h5><h3>',
  });
  addMarker({
    coords: {
      lat: 23.0264481,
      lng: 72.5266346
    },
    content: '<h3>Cafe Pepparazi<h5 style="margin-top:-10px">Panjra pol,&nbsp;&nbsp;Ahmedabad</h5><h3>',
  });

  addMarker({
    coords: {
      lat: 23.0442718,
      lng: 72.5483519
    },
    content: '<h3>The Cafe Baraco<h5 style="margin-top:-10px">Memnagar,&nbsp;&nbsp;Ahmedabad</h5><h3>',
  });
  addMarker({
    coords: {
      lat: 23.0288209,
      lng: 72.5580053
    },
    content: '<h3>The Hide Out Cafe<h5 style="margin-top:-10px">Law garden,&nbsp;&nbsp;Ahmedabad</h5><h3>',
  });

  addMarker({
    coords: {
      lat: 23.0387059,
      lng: 72.5032821
    },
    content: '<h3>Cafe Raisins<h5 style="margin-top:-10px">Bodakdev,&nbsp;&nbsp;Ahmedabad</h5><h3>',
  });

  addMarker({
    coords: {
      lat: 23.0391905,
      lng: 72.507391
    },
    content: '<h3>Rest. Ratatouille<h5 style="margin-top:-10px">Sindhu bhavan road,&nbsp;&nbsp;Ahmedabad</h5><h3>',
  });
  addMarker({
    coords: {
      lat: 23.0119425,
      lng: 72.510229
    },
    content: '<h3>Cafe Varietea<h5 style="margin-top:-10px">Prahladnagar,&nbsp;&nbsp;Ahmedabad</h5><h3>',
  });

  addMarker({
    coords: {
      lat: 23.0391829,
      lng: 72.5072303
    },
    content: '<h3>Cafe Varietea<h5 style="margin-top:-10px">Sindhu bhavan,&nbsp;&nbsp;Ahmedabad</h5><h3>',
  });

  addMarker({
    coords: {
      lat: 22.994907,
      lng: 72.6069243
    },
    content: '<h3>Cafe Varietea<h5 style="margin-top:-10px">Sindhu bhavan,&nbsp;&nbsp;Ahmedabad</h5><h3>',
  });

  
  function addMarker(props) {

      var marker = new google.maps.Marker({
      position: props.coords,
      icon: 'myicon.png',
      map: map,
    });

    markers.push(marker);
   

    if (props.iconImage) {
      marker.setIcon(props.iconImage);
    }
    if (props.content) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      })
    }
  }
  $('.marker1').click(function () {
    // parse lat and lng from the divs data attribute  
    map.setCenter({
      lat: 23.0238201,
      lng: 72.5579489
    });
    map.setZoom(15);
    google.maps.event.trigger(markers[0], 'click');
  });

  $('.marker2').click(function () {
    // parse lat and lng from the divs data attribute  
    map.setCenter({
      lat: 23.0741254,
      lng: 72.5047445
    });
    map.setZoom(15);
    google.maps.event.trigger(markers[1], 'click');
  });
  $('.marker3').click(function () {
    // parse lat and lng from the divs data attribute  
    map.setCenter({
      lat: 23.0386861,
      lng: 72.5021108
    });
    map.setZoom(15);
    google.maps.event.trigger(markers[2], 'click');
  });
  $('.marker4').click(function () {
    // parse lat and lng from the divs data attribute  
    map.setCenter({
      lat: 23.0116583,
      lng: 72.5132806
    });
    map.setZoom(15);
    google.maps.event.trigger(markers[3], 'click');
  });
  $('.marker5').click(function () {
    // parse lat and lng from the divs data attribute  
    map.setCenter({
      lat: 23.0264481,
      lng: 72.5266346
    });
    map.setZoom(15);
    google.maps.event.trigger(markers[4], 'click');
  });
  $('.marker6').click(function () {
    // parse lat and lng from the divs data attribute  
    map.setCenter({
      lat: 23.0442718,
      lng: 72.5483519
    });
    map.setZoom(15);
    google.maps.event.trigger(markers[5], 'click');
  });
  $('.marker7').click(function () {
    // parse lat and lng from the divs data attribute  
    map.setCenter({
      lat: 23.0288209,
      lng: 72.5580053
    });
    map.setZoom(15);
    google.maps.event.trigger(markers[6], 'click');
  });
  $('.marker8').click(function () {
    // parse lat and lng from the divs data attribute  
    map.setCenter({
      lat: 23.0387059,
      lng: 72.5032821
    });
    map.setZoom(15);
    google.maps.event.trigger(markers[7], 'click');
  });
  $('.marker9').click(function () {
    // parse lat and lng from the divs data attribute  
    map.setCenter({
      lat: 23.0391905,
      lng: 72.507391
    });
    map.setZoom(15);
    google.maps.event.trigger(markers[8], 'click');
  });
  $('.marker10').click(function () {
    // parse lat and lng from the divs data attribute  
    map.setCenter({
      lat: 23.0119425,
      lng: 72.510229
    });
    map.setZoom(15);
    google.maps.event.trigger(markers[9], 'click');
  });
  $('.marker11').click(function () {
    // parse lat and lng from the divs data attribute  
    map.setCenter({
      lat: 23.0391829,
      lng: 72.5072303
    });
    map.setZoom(15);
    google.maps.event.trigger(markers[10], 'click');
  });
  $('.marker12').click(function () {
    // parse lat and lng from the divs data attribute  
    map.setCenter({
      lat: 22.994907,
      lng: 72.6069243
    });
    map.setZoom(15);
    google.maps.event.trigger(markers[11], 'click');
  });
}