import React, {useState} from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { IconLocation2 } from "../Components/IconLocation2";

function LocationMarker() {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })
  
    return position === null ? null : (
      <Marker position={position} icon={IconLocation2}>
        <Popup>You are here</Popup>
      </Marker>
    )
  }

export {LocationMarker}