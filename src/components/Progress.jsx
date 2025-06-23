import { useEffect, useRef, useState } from "react";

const TIMER = 5000;

export default function Progress({ nextQuestion }) {
  const [timer, setTimer] = useState(TIMER);
  const intervalRef = useRef(null);
  const nextQuestionRef = useRef(nextQuestion);

  // Keep nextQuestion ref updated
  useEffect(() => {
    nextQuestionRef.current = nextQuestion;
  }, [nextQuestion]);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 100) {
          // Trigger next question
          nextQuestionRef.current();
          // Reset timer
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
