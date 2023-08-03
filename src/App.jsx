import { useState, useEffect, useRef } from 'react'
import sound1 from './assets/Heater-1.mp3'
import sound2 from './assets/Heater-2.mp3'
import sound3 from './assets/Heater-3.mp3'
import sound4 from './assets/Heater-4_1.mp3'
import sound5 from './assets/Heater-6.mp3'
import sound9 from './assets/Cev_H2.mp3'
import sound7 from './assets/Kick_n_Hat.mp3'
import sound8 from './assets/RP4_KICK_1.mp3'
import sound6 from './assets/Dsc_Oh.mp3'

import './App.css'

function App() {

  const [vol, setVol] = useState(100)
  const [displayTxt,setDisplayTxt] = useState("")
  const ref = useRef(null)

  const clickPad = (e) => {
    e.target.children[1].currentTime = 0
    e.target.children[1].play()
    changeorange(e.target)
    setDisplayTxt( e.target.children[1].innerText)
  }

  const changeorange = (div) => {
    div.classList.add("orange")
    setInterval(() => {div.classList.remove("orange")},5)

  }

  useEffect(() => {
    window.addEventListener('keypress', e => {
      const items = ref.current.childNodes
      switch (e.code) {
        case "KeyQ":
          items[0].children[1].currentTime = 0
          items[0].children[1].play()
          changeorange(items[0])
          setDisplayTxt(items[0].children[1].innerText)
          break
        case "KeyW":
          items[1].children[1].currentTime = 0
          items[1].children[1].play()
          changeorange(items[1])
          setDisplayTxt(items[1].children[1].innerText)
          break
        case "KeyE":
          items[2].children[1].currentTime = 0
          items[2].children[1].play()
          changeorange(items[2])
          setDisplayTxt(items[2].children[1].classList)
          break
        case "KeyA":
          items[3].children[1].currentTime = 0
          items[3].children[1].play()
          changeorange(items[3])
          setDisplayTxt(items[3].children[1].innerText)
          break
        case "KeyS":
          items[4].children[1].currentTime = 0
          items[4].children[1].play()
          changeorange(items[4])
          setDisplayTxt(items[4].children[1].innerText)
          break
        case "KeyD":
          items[5].children[1].currentTime = 0
          items[5].children[1].play()
          changeorange(items[5])
          setDisplayTxt(items[5].children[1].innerText)
          break
        case "KeyZ":
          items[6].children[1].currentTime = 0
          items[6].children[1].play()
          changeorange(items[6])
          setDisplayTxt(items[6].children[1].innerText)
          break
        case "KeyX":
          items[7].children[1].currentTime = 0
          items[7].children[1].play()
          changeorange(items[7])
          setDisplayTxt(items[7].children[1].innerText)
          break
        case "KeyC":
          items[8].children[1].currentTime = 0
          items[8].children[1].play()
          changeorange(items[8])
          setDisplayTxt(items[8].children[1].innerText)
          break
        default:
          break
      }
    })
  }, []);

  const changevol = (e) => {
    // console.log(ref.current.childNodes)
    const items = ref.current.childNodes //เป็น [] children เป็น obj
    items.forEach((item) => {
      item.children[1].volume = e.target.value / 100
    })
    setVol(e.target.value)
  }




  return (
    <>
      <div id="drum-machine" >
        <div id="drum" ref={ref}>
          <div className="drum-pad" id="Q" onClick={clickPad}>
            <p id="Q" >Q</p>
            <audio src={sound1} id="Q" className='clip'>Heater 1</audio>
          </div>
          <div className="drum-pad" id="W" onClick={clickPad}>
            <p id="W">W</p>
            <audio src={sound2} id="W" className='clip'>Heater 2</audio>
          </div>
          <div className="drum-pad" id="E" onClick={clickPad}>
            <p id="E" >E</p>
            <audio src={sound3} id="E" className='clip'>Heater 3</audio>
          </div>
          <div className="drum-pad" id="A" onClick={clickPad}>
            <p id="A" >A</p>
            <audio src={sound4} id="A" className='clip'>Heater 4</audio>
          </div>
          <div className="drum-pad" id="S" onClick={clickPad}>
            <p id="S" >S</p>
            <audio src={sound5} id="S" className='clip'>Clap</audio>
          </div>
          <div className="drum-pad" id="D" onClick={clickPad}>
            <p id="D" >D</p>
            <audio src={sound6}  id="D" className='clip'>Open HH</audio>
          </div>
          <div className="drum-pad" id="Z" onClick={clickPad}>
            <p id="Z" >Z</p>
            <audio src={sound7} id="Z" className='clip'>Kick n' Hat</audio>
          </div>
          <div className="drum-pad" id="X" onClick={clickPad}>
            <p id="X">X</p>
            <audio src={sound8} id="X" className='clip'>Kick</audio>
          </div>
          <div className="drum-pad" id="C" onClick={clickPad}>
            <p id="C">C</p>
            <audio src={sound9} id="C" className='clip'>Closed HH</audio>
          </div>
        </div>
        <div className='control'>   

          <h1>Drum-Mechine</h1>

          <input type="range" className="volume" min="0" max="100" onInput={changevol} defaultValue={vol} />
          <p>volume:{vol}</p>
          <p id="display">{displayTxt}</p>

        </div>

      </div>
    </>
  )
}

export default App
