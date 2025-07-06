import { useEffect, useRef, useState } from "react";

// const TIMER = 5000;

export default function Progress({ nextQuestion, timer }) {
  // const [timer, setTimer] = useState(TIMER);
  const [progressTimer, setProgressTimer] = useState(timer);
  const intervalRef = useRef(null);
  const nextQuestionRef = useRef(nextQuestion);

  useEffect(() => {
    nextQuestionRef.current = nextQuestion;
  }, [nextQuestion]);

  useEffect(() => {
    setProgressTimer(timer); // reset on mount (key change in parent remounts this)
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
      <progress value={timer} max={progressTimer} className="progress-bar my-2.5" />
    </div>
  );
}
