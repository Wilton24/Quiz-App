import { useEffect, useRef, useState } from "react";

const TIMER = 5000;
let className = "progress-bar my-2.5";

export default function Progress({ nextQuestion, timer, cooldown }) {
  const [progressTimer, setProgressTimer] = useState(timer);
  const intervalRef = useRef(null);
  const nextQuestionRef = useRef(nextQuestion);

  useEffect(() => {
    nextQuestionRef.current = nextQuestion;
  }, [nextQuestion]);

  useEffect(() => {
    setProgressTimer(timer);
    intervalRef.current = setInterval(() => {
      setProgressTimer((prev) => {
        if (prev <= 100) {
          nextQuestionRef.current(); // call parent        
          return timer;
        }
        return prev - 100;


      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <progress value={progressTimer} max={cooldown ? 3000 : TIMER} className={cooldown ? `${className} cooldown` : className} />
    </div>
  );
}
