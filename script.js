function geoFindMe() {
    const status = document.querySelector("#status");
    const mapLink = document.querySelector("#map-link");
  
    mapLink.href = "";
    mapLink.textContent = "";
  
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = "";
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = "No se puede obtener tu ubicación";
    }
  
    if (!navigator.geolocation) {
      status.textContent = "La Geolocalización no es compatible con su navegador seleccionado";
    } else {
      status.textContent = "Cargando...";
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }
  
  document.querySelector("#find-me").addEventListener("click", geoFindMe);
  