mapboxgl.accessToken = 'pk.eyJ1IjoibGVzaGxlbWFuIiwiYSI6ImNrdnNpaXE1cTgyNDEyd21zZ3BtaHR3NjIifQ.LMj1Oor12FC8L19lGHt5Zw';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {enableHighAccuracy: true})

function successLocation(position) {
   console.log(position)
   setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation () {
   setupMap([-2.24, 53.48])

}

function setupMap(center) {
   const map = new mapboxgl.Map({
   container: 'map',
   style: 'mapbox://styles/mapbox/streets-v11',
   center: center,
   zoom: 14

})
   const nav = new mapboxgl.NavigationControl();
   map.addControl(nav);

   var directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
    });
    
    map.addControl(directions, 'top-left');
}
