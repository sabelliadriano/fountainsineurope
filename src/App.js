import React from 'react'
import FontanaMap from './FontanaMap'

function App() {
  const position = [51.505, -0.09];
  return (
    <div>
      <h1>Benvegnuti nell App fontane!</h1>
      <FontanaMap position = {position}/>
    </div>
  );
}

export default App;
