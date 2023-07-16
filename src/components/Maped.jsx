import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoib29vZ2dnIiwiYSI6ImNsazU0djRjczEzNDgzdG8xejFmMjhwYmUifQ.d-DdHWmAQPugYvLQ9jdy-Q";

const Maped = ({ location, currentPosition }) => {
  console.log(currentPosition);
  const mapContainer = useRef();
  const map = useRef();
  const marker = useRef();
  const [lng, setLng] = useState(-20.9);
  const [lat, setLat] = useState(22.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (
      !location ||
      location.latitude === undefined ||
      location.longitude === undefined ||
      location.latitude === "Not found"
    ) {
      return;
    }

    if (!map.current) {
      // Inicializar el mapa solo una vez
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [location?.longitude, location?.latitude],
        zoom: 9,
      });

      // Crear el marcador
      marker.current = new mapboxgl.Marker()
        .setLngLat([location.longitude, location.latitude])
        .addTo(map.current);
    } else {
      // Actualizar la posición del mapa
      map.current.flyTo({
        center: [location.longitude, location.latitude],
        zoom: 9,
      });

      marker.current.setLngLat([location.longitude, location.latitude]);
    }
  }, [location]);

  return (
    <div className="main__map__container">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
};

export default Maped;
