import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar'
import Body from './components/body/Body'

function App() {
  const {selected, navbar} = Navbar()
  const {body} = Body(selected)
  console.log('app - ', selected)
  return (
    <div>
      {body}
      {navbar}
    </div>
  );
}

export default App;
