import React from 'react'
import FontanaMap from './FontanaMap'

const fontane = [
  { id: 1, lat: 51.505, lng: -0.09, nome: "Fontana 1" },
  { id: 2, lat: 41.382128, lng: 2.187600,  nome: "Carre de Balboa 10 BCN" },
  // ... altre fontane
];

function App() {
  const position = [51.505, -0.09];
  return (
    <div>
      <h1>Benvegnuti nell App fontanes!</h1>
      <FontanaMap position = {position} fontane = {fontane} />
    </div>
  );
}

export default App;
