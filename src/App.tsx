import React, { useState } from 'react';
import './App.scss';

import Box from './components/default/Box';
import Input from './components/default/Input';
import Button from './components/default/Button';

function App() {
  return (
    <div className="container">
      <Box
        media={[10, 23, 30, 40, 50, 324, 429, 423, 2, 4]}
        itemName="Hamburguer"
        quantity={40}
      />

      <Input placeholder="something" />
      <Button text="something" />
    </div>
  );
}

export default App;
