import React from 'react'
import Metronomo from './Metronomo'
import TempoContextProvider from '../contexts/TempoContext';
import Controls from './Controls';

function App() {
  return (
    <div className="App">
      <TempoContextProvider>
        <Metronomo />
        <Controls />
      </TempoContextProvider>
    </div>
  );
}

export default App
