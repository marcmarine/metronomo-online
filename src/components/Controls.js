import React, { useContext, useEffect } from 'react';
import { TempoContext } from '../contexts/TempoContext'

const Controls = () => {
  const { tempo, tempos, increaseTempo, decreaseTempo, togglePlay, isPlaying } = useContext(TempoContext)
  const keyPressed = (event) => {
    if (event.keyCode === 32) {
      togglePlay()
    }
    if ((event.keyCode === 37 || event.keyCode === 40 ) && tempo !== 40 ) {
      decreaseTempo()
    }
    if (( event.keyCode === 39 || event.keyCode ===  38 ) && tempo !== 208) {
      increaseTempo()
    }
  }
  useEffect(() => {
    window.addEventListener('keyup', keyPressed)
    return () => {
      window.removeEventListener('keyup', keyPressed)
    }
  })
  return (
    <div className="controls">
      <button className="button" onClick={decreaseTempo} disabled={tempo <= tempos[0]}>-</button>
      <button className="button" onClick={togglePlay}>{isPlaying ? '| |' : '▶'}</button>
      <button className="button" onClick={increaseTempo} disabled={tempo >= tempos[tempos.length - 1]}>+</button>
    </div>
  );
}
 
export default Controls