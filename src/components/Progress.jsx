import { useState, useEffect } from "react";

const TIMER = 5000;
let c = 1;

export default function Progress({isStartGame, nextQuestion}){  
  const [timer, setTimer] = useState(TIMER);
  
  useEffect(()=>{    
    const questionTimer = setInterval(() => {
      setTimer(prevTimer => prevTimer - 100);      
    }, 100);

    return ()=> {
      clearInterval(questionTimer);
    }
  },[nextQuestion])

  useEffect(()=>{
    const questionTimer = setTimeout(()=>{
      nextQuestion();
      setTimer(TIMER);
    }, timer)

    return ()=> {
      clearTimeout(questionTimer);
    }
  }, );

  console.log(`ProgressBar rendered ${c++} times` );
  

  
console.log(timer);

  return (
    <div>
      <progress
        value={timer}
        max={TIMER}
        className="progress-bar my-2.5" />
    </div>
  )
}