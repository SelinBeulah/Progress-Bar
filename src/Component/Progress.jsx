import { useState } from "react"
import "./Progress.css"
import { useEffect } from "react"

const Progress = () => {
  const [bar, setBar] = useState(0)

  //mount
  useEffect(()=>{

   const timer = setInterval(()=>{
    setBar((prevBarVal)=>{
      if(prevBarVal >=100){
         clearInterval(timer)
      }return Math.min(prevBarVal + 15, 100)
    })
   },1000)
   return(()=>{
    clearInterval(timer)
   })
  },[])
    

  return (
  <>
    <div className="main-container">
      <div className="progress-bar" style={{transform:`TranslateX(${bar - 100}%)`}}></div>
      </div> 
   </>
  )
}

export default Progress