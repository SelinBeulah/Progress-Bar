import { useState } from 'react'
import './App.css'
import Progress from './Component/Progress'




function App() {
  const [show, setShow] = useState(false)
  
  //handle Show
  
  return (
   <div className="app">
    <h1>Progress Bar</h1>
    {
      show && <Progress/>
    }

    <button onClick={()=>setShow(!show)}>Start</button>
     
   </div>
  )
}

export default App
