import { useEffect, useRef, useState } from "react";

let className = "progress-bar my-2.5";

export default function Progress({
  nextQuestion,
  timer,
  cooldown,
  handleAnswerQuestion,
}) {
  const [progressTimer, setProgressTimer] = useState(timer);
  const intervalRef = useRef(null);

  const nextQuestionRef = useRef(nextQuestion);
  const handleAnswerRef = useRef(handleAnswerQuestion);

  useEffect(() => {
    nextQuestionRef.current = nextQuestion;
    handleAnswerRef.current = handleAnswerQuestion;
  }, [nextQuestion, handleAnswerQuestion]);

  useEffect(() => {
    setProgressTimer(timer);
  }, [cooldown, timer]);

  useEffect(() => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setProgressTimer((prev) => {
        if (prev <= 100) {
          clearInterval(intervalRef.current);

          if (cooldown) {
            nextQuestionRef.current();
          } else {
            handleAnswerRef.current(null); // time ran out, auto wrong
          }

          return 0;
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
