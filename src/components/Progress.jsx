import { useEffect, useState, useRef } from "react";

const TIMER = 5000;

export default function Progress({ isStartGame, nextQuestion }) {
  const [timer, setTimer] = useState(TIMER);
  const intervalRef = useRef(null);
  const nextQuestionRef = useRef(nextQuestion); // keep the latest version

  // Keep nextQuestion ref updated to avoid stale closure
  useEffect(() => {
    nextQuestionRef.current = nextQuestion;
  }, [nextQuestion]);

  // Reset timer whenever nextQuestion changes (e.g., user goes to next question)
  useEffect(() => {
    setTimer(TIMER);
  }, [nextQuestion]);

  useEffect(() => {
    if (!isStartGame) return;

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 100) {
          clearInterval(intervalRef.current);
          nextQuestionRef.current(); // safely call the latest function
          return TIMER; // Reset immediately after triggering
        }
        return prev - 100;
      });
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [isStartGame]);

  return (
    <div>
      <progress value={timer} max={TIMER} className="progress-bar my-2.5" />
    </div>
  );
}
