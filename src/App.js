import React from 'react'
import FontanaMap from './FontanaMap'
import Navbar from './Navbar'

const fontane = [
  { id: 1, lat: 51.505, lng: -0.09, nome: "Fontana 1" },
  { id: 2, lat: 41.382128, lng: 2.187600,  nome: "npmCarre de Balboa 10 BCN" },
  // ... altre fontane
];

function App() {
  const position = [51.505, -0.09];
  return (
    <div>
      <Navbar />
      <h1 className='title'>Benvegnuti nell App fontanes!</h1>
      <FontanaMap position = {position} fontane = {fontane} />
    </div>
  );
}

export default App;
