function initMap() {
    // Specify coordinates for the center of the map
    var center = { lat: 40.7128, lng: -74.0060 }; // Example: New York City

    // Create a new map object and set its properties
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,        // Adjust the initial zoom level
      center: center,  // Set the center of the map
      mapTypeId: google.maps.MapTypeId.ROADMAP  // Specify the map type
    });

    // Create a marker and set its position
    var marker = new google.maps.Marker({
      position: center,  // Set the marker position to the center of the map
      map: map,          // Set the map to display the marker
      title: 'Hello World!' // Optional: Set a title for the marker
    });
  }

  window.onload = initMap;