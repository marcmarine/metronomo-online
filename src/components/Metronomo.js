import React, { useContext, useEffect } from 'react'
import { TempoContext } from '../contexts/TempoContext'

import './Metronomo.css'

const startMetronome = function (tempo) {
  let duration = 60 / tempo;
  document.querySelector('.pendulo').style.animationDuration = duration * 2 + 's';
  document.querySelector('.pendulo').style.animationName = 'tick';
}

const stopMetronome = function () {
  document.querySelector('.pendulo').style.animationDuration = '0s';
  document.querySelector('.pendulo').style.animationName = 'none';
}

const Metronomo = () => {
  const { tempo, isPlaying, tempos } = useContext(TempoContext)
  useEffect(()=> {
    if (isPlaying) {
      startMetronome(tempo)
      const lookahead = 0.010;
      let nextNoteTime = 0.0 + 60.0 / tempo / 2;
      const audioContext = new AudioContext()
      function schedule() {
          var sequenceTime = audioContext.currentTime
      
          while (nextNoteTime < sequenceTime + lookahead ) {
              var osc = audioContext.createOscillator()
              osc.connect( audioContext.destination )
              osc.start( nextNoteTime )
              osc.stop( nextNoteTime + 0.05 )
              var secondsPerBeat = 60.0 / tempo
              nextNoteTime += secondsPerBeat
          }
      }
      setInterval( schedule )
    } else {
      stopMetronome()
      for (var i = 1; i < 99999; i++)
      clearInterval(i)
    }
  })
  let weightPosition = `calc( ( ${tempos.indexOf(tempo)} + 1 ) * 8.62px)`
  return (
    <div className="metronomo">
      {console.log(tempos.indexOf(tempo))}
        <div className="mask">
          <div className="pendulo">
            <label className="peso" style={{ top: weightPosition}}>
              <svg viewBox="0 0 104 94">
                <g id="metronomo">
                  <g id="conjunto-palo">
                    <g id="peso">
                      <g id="peso-base">
                        <path fill="#666" d="M86 79a13 13 0 01-12 10H30a13 13 0 01-12-10L5 15a8 8 0 018-10h78a8 8 0 018 10z"/>
                        <path fill="none" stroke="#313131" stroke-miterlimit="10" stroke-width="10" d="M86 79a13 13 0 01-12 10H30a13 13 0 01-12-10L5 15a8 8 0 018-10h78a8 8 0 018 10z"/>
                      </g>
                      <g id="peso-ciruclos">
                        <circle id="circulo2" cx="72.6" cy="28.3" r="12.5" fill="#313131"/>
                        <circle id="circulo1" cx="31.6" cy="28.3" r="12.5" fill="#313131"/>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </label>
          </div>
        </div>
        <svg id="metronomo" viewBox="795 350.9 410 792.2">
          <line id="suelo" className="borde" x1="800" y1="1138.1" x2="1200" y2="1138.1"/>
          <g id="patas">
            <g id="pata2">
              <circle className="base-inferior" cx="1145.5" cy="1111.4" r="22.7"/>
            </g>
            <g id="pata1">
              <circle className="base-inferior" cx="853.3" cy="1111.4" r="22.7"/>
            </g>
          </g>
          <path id="base-superior" className="base-superior" d="M1155.6,856.4H843.4L923,380.1c2.4-14,14.5-24.2,28.7-24.2h95.3c14.2,0,26.3,10.2,28.7,24.2
            L1155.6,856.4z"/>
          <path id="base-inferior" className="base-inferior" d="M1155.6,856.4l33.8,201.2c3,17.7-10.7,33.9-28.7,33.9H838.4c-18,0-31.7-16.2-28.7-33.9
            l33.8-201"/>
          <g id="marcas">
              <line className="marca" x1="950.5" y1="382.2" x2="999.4" y2="382.2"/>
              <line className="marca" x1="999.4" y1="393.9" x2="1048.2" y2="393.9"/>
              <line className="marca" x1="950.5" y1="405.6" x2="999.4" y2="405.6"/>
              <line className="marca" x1="999.4" y1="417.2" x2="1048.2" y2="417.2"/>
              <line className="marca" x1="950.5" y1="428.9" x2="999.4" y2="428.9"/>
              <line className="marca" x1="999.4" y1="440.6" x2="1048.2" y2="440.6"/>
              <line className="marca" x1="950.5" y1="452.3" x2="999.4" y2="452.3"/>
              <line className="marca" x1="999.4" y1="464" x2="1048.2" y2="464"/>
              <line className="marca" x1="950.5" y1="475.7" x2="999.4" y2="475.7"/>
              <line className="marca" x1="999.4" y1="487.4" x2="1048.2" y2="487.4"/>
              <line className="marca" x1="950.5" y1="499.1" x2="999.4" y2="499.1"/>
              <line className="marca" x1="999.4" y1="510.8" x2="1048.2" y2="510.8"/>
              <line className="marca" x1="950.5" y1="522.5" x2="999.4" y2="522.5"/>
              <line className="marca" x1="999.4" y1="534.2" x2="1048.2" y2="534.2"/>
              <line className="marca" x1="950.5" y1="545.8" x2="999.4" y2="545.8"/>
              <line className="marca" x1="999.4" y1="557.5" x2="1048.2" y2="557.5"/>
              <line className="marca" x1="950.5" y1="569.2" x2="999.4" y2="569.2"/>
              <line className="marca" x1="999.4" y1="580.9" x2="1048.2" y2="580.9"/>
              <line className="marca" x1="950.5" y1="592.6" x2="999.4" y2="592.6"/>
              <line className="marca" x1="999.4" y1="604.3" x2="1048.2" y2="604.3"/>
              <line className="marca" x1="950.5" y1="616" x2="999.4" y2="616"/>
              <line className="marca" x1="999.4" y1="627.7" x2="1048.2" y2="627.7"/>
              <line className="marca" x1="950.5" y1="639.4" x2="999.4" y2="639.4"/>
              <line className="marca" x1="999.4" y1="651.1" x2="1048.2" y2="651.1"/>
              <line className="marca" x1="950.5" y1="662.7" x2="999.4" y2="662.7"/>
              <line className="marca" x1="999.4" y1="674.4" x2="1048.2" y2="674.4"/>
              <line className="marca" x1="950.5" y1="686.1" x2="999.4" y2="686.1"/>
              <line className="marca" x1="999.4" y1="697.8" x2="1048.2" y2="697.8"/>
              <line className="marca" x1="950.5" y1="709.5" x2="999.4" y2="709.5"/>
              <line className="marca" x1="999.4" y1="721.2" x2="1048.2" y2="721.2"/>
              <line className="marca" x1="950.5" y1="732.9" x2="999.4" y2="732.9"/>
              <line className="marca" x1="999.4" y1="744.6" x2="1048.2" y2="744.6"/>
              <line className="marca" x1="950.5" y1="756.3" x2="999.4" y2="756.3"/>
              <line className="marca" x1="999.4" y1="768" x2="1048.2" y2="768"/>
              <line className="marca" x1="950.5" y1="779.6" x2="999.4" y2="779.6"/>
              <line className="marca" x1="999.4" y1="791.3" x2="1048.2" y2="791.3"/>
              <line className="marca" x1="950.5" y1="803" x2="999.4" y2="803"/>
              <line className="marca" x1="999.4" y1="380.4" x2="999.4" y2="854.4"/>
          </g>
          {/* <g id="conjunto-palo">
            <line id="palo" fill="none" stroke="#313131" strokeWidth="10" strokeLinecap="round" strokeMiterlimit="10" x1="999.4" y1="373.4" x2="999.4" y2="854.4"/>
            <g id="peso">
              <g id="peso-base">
                <path fill="#666666" d="M1033.6,577.2c-1.1,5.4-6.5,9.8-12,9.8l-43.7-0.1c-5.5,0-10.9-4.4-12-9.8L953.1,513
                  c-1.1-5.4,2.5-9.8,8-9.8l77.7,0.2c5.5,0,9.1,4.4,8,9.8L1033.6,577.2z"/>
                <path fill="none" stroke="#313131" strokeWidth="10" strokeMiterlimit="10" d="M1033.6,577.2c-1.1,5.4-6.5,9.8-12,9.8l-43.7-0.1c-5.5,0-10.9-4.4-12-9.8L953.1,513
                  c-1.1-5.4,2.5-9.8,8-9.8l77.7,0.2c5.5,0,9.1,4.4,8,9.8L1033.6,577.2z"/>
              </g>
              <g id="peso-ciruclos">
                <circle id="circulo2" fill="#313131" cx="1020.5" cy="526.5" r="12.5"/>
                <circle id="circulo1" fill="#313131" cx="979.5" cy="526.5" r="12.5"/>
              </g>
            </g>
          </g> */}
          <path id="borde-division" className="borde" d="M843.4,856.6h312.2H843.4z"/>
          <path id="borde-base" className="borde" d="M864.4,1091.6c6.9,3.9,11.6,11.3,11.6,19.8c0,12.5-10.2,22.7-22.7,22.7s-22.7-10.2-22.7-22.7
            c0-8.5,4.7-15.9,11.6-19.8l0,0h-3.8c-18,0-31.7-16.2-28.7-33.9l33.8-201v-0.2L923,380.1c2.4-14,14.5-24.2,28.7-24.2h95.3
            c14.2,0,26.3,10.2,28.7,24.2l79.9,476.3l33.8,201.2c3,17.7-10.7,33.9-28.7,33.9h-4.1l0,0c6.9,3.9,11.6,11.3,11.6,19.8
            c0,12.5-10.2,22.7-22.7,22.7s-22.7-10.2-22.7-22.7c0-8.5,4.7-15.9,11.6-19.8L864.4,1091.6z"/>
        </svg>
        <p className="tempo">{tempo} ppm</p>
      </div>
  );
}
 
export default Metronomo