import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const fontanaIcon = new L.Icon({
  iconUrl: process.env.PUBLIC_URL + '/marker.png',
  iconSize: [32, 32], // dimensioni dell'icona
  iconAnchor: [16, 32], // punto dell'icona che corrisponderà esattamente alla posizione del marker
  popupAnchor: [0, -32] // punto da cui apparirà il popup
});


function FontanaMap({ fontane, position }) {
  return (
    <MapContainer center={position} zoom={4} style={{ width: '100%', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />{fontane.map((fontana)=>(<Marker
        key={fontana.id}
        position={[fontana.lat, fontana.lng]}
        icon = {fontanaIcon}
        // ... altre props, come l'icona
      >
        <Popup>{fontana.nome}</Popup>
      </Marker>))}
        
        
      
    </MapContainer>
  );
}

export default FontanaMap;