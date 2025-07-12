import { useEffect, useRef, useState } from "react";

let className = "progress-bar my-2.5";

export default function Progress({ nextQuestion, timer, cooldown }) {
  const [progressTimer, setProgressTimer] = useState(timer);
  const intervalRef = useRef(null);
  const nextQuestionRef = useRef(nextQuestion);

  // Keep nextQuestion function in sync
  useEffect(() => {
    nextQuestionRef.current = nextQuestion;
  }, [nextQuestion]);

  // Reset progress timer when cooldown or timer changes
  useEffect(() => {
    setProgressTimer(timer);
  }, [cooldown, timer]);

  // Countdown logic
  useEffect(() => {
    clearInterval(intervalRef.current); // clear any previous intervals

    intervalRef.current = setInterval(() => {
      setProgressTimer((prev) => {
        if (prev <= 100) {
          clearInterval(intervalRef.current);

          if (cooldown) {
            // Proceed to next question *only* after cooldown ends
            nextQuestionRef.current();
          }

          return 0; // stop progress
        }

        return prev - 100;
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [cooldown, timer]);

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
