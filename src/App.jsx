import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
     <div className="bg-change" style={{backgroundColor:color}}>
      <button className='red' onClick={() => setColor("red")}>Red</button>
      <button className='blue' onClick={() => setColor("blue")}>Blue</button>
      <button className='green' onClick={() => setColor("green")}>Green</button>
      <button className='yellow' onClick={() => setColor("yellow")}>Yellow</button>
      <button className='black' onClick={() => setColor("black")}>Black</button>
      <button className='gray' onClick={() => setColor("gray")}>Gray</button>
      <button className='pink' onClick={() => setColor("indigo")}>Indigo</button>
      <button className='purple' onClick={() => setColor("purple")}>Purple</button>
     </div>
    </>
  )
}

export default App
