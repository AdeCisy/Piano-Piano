import React from 'react'
import Header from './Header.js'
import PianoBackground from './Components/Background'

import './App.css';
import PianoKeyboard from './piano';

function App() {
  return (
    <div className="App">
     <div>
      <Header />
      </div>
      <div className="PianoKeyBoard">
     <PianoBackground/>
     </div>
    <PianoKeyboard />
    </div>
  );
}

export default App;
