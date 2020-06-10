import React, { useState } from 'react';
import './App.css';

import Box from './components/default/Box';

function App() {
  return (
    <div className="container">
      <Box
        // media={[10, 23, 30, 40, 50, 324, 429, 423, 2, 4]}
        itemName="Hamburguer"
        quantity={40}
      />
    </div>
  );
}

export default App;
