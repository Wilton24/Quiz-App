import { useEffect, useRef, useState } from "react";

const TIMER = 5000;

export default function Progress({ nextQuestion }) {
  const [timer, setTimer] = useState(TIMER);
  const intervalRef = useRef(null);
  const nextQuestionRef = useRef(nextQuestion);

  useEffect(() => {
    nextQuestionRef.current = nextQuestion;
  }, [nextQuestion]);

  useEffect(() => {
    setTimer(TIMER); // reset on mount (key change in parent remounts this)
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 100) {
          nextQuestionRef.current(); // call parent        
          return TIMER;
        }
        return prev - 100;
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <progress value={timer} max={TIMER} className="progress-bar my-2.5" />
    </div>
  );
}
