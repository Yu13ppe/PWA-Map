import React, { useState,  useEffect } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { IconLocation3 } from "../Components/IconLocationHere";

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng)
    },
  })

  useEffect(() => {
    map.locate();
  }, [map]);

  return position === null ? null : (
    <Marker position={position} icon={IconLocation3}>
      <Popup>Estás aquí</Popup>
    </Marker>
  )
}

export { LocationMarker }