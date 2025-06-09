import { useState, useEffect } from "react";


const TIMER = 5000;

export default function Progress({}){

  // useEffect(()=>{
  //   const questionTimer = setInterval(() => {
  //     setTimer(prevTimer => prevTimer - 100);
  //   }, 100);

  //   return ()=> {
  //     clearInterval(questionTimer);
  //   }
  // }, [])

  // useEffect(()=>{
  //   const questionTimer = setTimeout(()=>{
      
  //   }, timer)

  //   return ()=> {
  //     clearTimeout(questionTimer);
  //   }
  // }, []);

  const [timer, setTimer] = useState(TIMER);
  
console.log(timer);



  return (
    <div>
      <progress
        value={timer}
        max={TIMER}
        className="progress-bar" />
    </div>
  )
}