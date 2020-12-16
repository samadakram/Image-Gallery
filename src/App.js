import React from 'react';
import './App.module.css';

// Import Components
import { Header } from './Components/Header/Header';
import { Gallery } from './Components/Gallery/Gallery';

function App() {
  return (
    <div>
      <Header />
      <Gallery />
    </div>
  );
}

export default App;
