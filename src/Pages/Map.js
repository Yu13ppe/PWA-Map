import React from 'react'
import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LocationMarker } from '../Components/LocationMarker'

function MapView() {

  const position = [10.693, -71.634]

  return (
    <div className='MapView'>
      <MapContainer center={position} zoom={15} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  )
}

export { MapView }