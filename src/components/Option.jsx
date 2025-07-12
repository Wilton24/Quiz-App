export default function Option({
  activeQuestion,
  questionIndex,
  handleAnswerQuestion,
  cooldown,
  answerState,
  userAnswer,
}) {
  const currentAnswers = [...activeQuestion[questionIndex.currentIndex].answers].sort(
    () => Math.random() - 0.5
  );
  const correctAnswer = activeQuestion[questionIndex.currentIndex].answers[0];

  return (
    <>
      {currentAnswers.map((answer) => {
        let bgClass = "bg-[rgb(140,83,69)] cursor-pointer";
        if (cooldown) {
          if (answer === correctAnswer) {
            bgClass = "bg-green-600 text-white"; // correct answer green highlight
          } else if (answerState === "wrong" && answer === userAnswer) {
            bgClass = "bg-red-600 text-white"; // wrong answer red highlight
          } else {
            bgClass = "bg-gray-400 cursor-not-allowed opacity-50"; // others dimmed
          }
        }

        return (
          <li
            key={answer}
            className={`block w-full text-left text-lg p-[7px] rounded-[10px] m-[10px] ${bgClass}`}
          >
            <button
              onClick={() => !cooldown && handleAnswerQuestion(answer)}
              disabled={cooldown}
              className="w-full text-left"
            >
              {answer}
            </button>
          </li>
        );
      })}
    </>
  );
}
