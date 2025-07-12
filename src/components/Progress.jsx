import { useEffect, useRef, useState } from "react";

let className = "progress-bar my-2.5";

export default function Progress({ nextQuestion, timer, cooldown }) {
  const [progressTimer, setProgressTimer] = useState(timer);

  const intervalRef = useRef(null);
  const nextQuestionRef = useRef(nextQuestion);

  // Keep nextQuestion always up to date
  useEffect(() => {
    nextQuestionRef.current = nextQuestion;
  }, [nextQuestion]);

  // Reset the progress timer when cooldown or timer changes
  useEffect(() => {
    setProgressTimer(timer);
  }, [cooldown, timer]);

  // Start progress countdown
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgressTimer((prev) => {
        if (prev <= 100) {
          nextQuestionRef.current();
          return timer; // reset to new timer value
        }
        return prev - 100;
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [timer]);

  return (
    <div>
      <progress
        value={progressTimer}
        max={timer}
        className={cooldown ? `${className} cooldown` : className}
      />
    </div>
  );
}
