import { useEffect, useRef, useState } from "react";

const TIMER = 5000;
let className = "progress-bar my-2.5";

export default function Progress({ nextQuestion, timer, cooldown }) {
  // progress timer, default to 5000ms // if cooldown is true, set to 3000ms
  const [progressTimer, setProgressTimer] = useState(timer);

  const intervalRef = useRef(null);
  const nextQuestionRef = useRef(nextQuestion);

  useEffect(() => {
    nextQuestionRef.current = nextQuestion;
  }, [nextQuestion]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgressTimer((prev) => {
        if (prev <= 100) {
          // call parent        
          nextQuestionRef.current();
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
