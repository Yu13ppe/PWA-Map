import React from 'react'
import { MapContainer, TileLayer, Polyline} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LocationMarker } from '../Components/LocationMarker'

function MapView() {

  const position = [10.693, -71.634]

  const multiPolyline = [
    [
      [10.668782, -71.623452],
      [10.671903, -71.626156],
      [10.673611, -71.626714],
      [10.677050, -71.627663],
      [10.678674, -71.628583],
      [10.685021, -71.632972],
      [10.711477, -71.640439]
    ],
  ]
  const limeOptions = { color: 'lime' }

  return (
    <div className='MapView'>
      <MapContainer center={position} zoom={15} >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <LocationMarker />
        <Polyline pathOptions={limeOptions} positions={multiPolyline} />
      </MapContainer>
    </div>
  )
}

export { MapView }