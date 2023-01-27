import React from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

function Map() {
  return (
    <div className='Map'>
        <MapContainer center={[10.656, -71.612]} zoom={6} scrollWheelZoom={true}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    </div>
  )
}

export {Map}