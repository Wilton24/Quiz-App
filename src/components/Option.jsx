export default function Option({
  activeQuestion,
  questionIndex,
  handleAnswerQuestion,
  cooldown
}) {
  // Clone and shuffle to avoid mutating original array
  const shuffledQuestion = [...activeQuestion[questionIndex.currentIndex].answers]
    .sort(() => Math.random() - 0.5);

  // Base styles
  const baseClass = "block w-full text-left text-lg p-[7px] rounded-[10px] m-[10px]";
  const activeStyle = "bg-[rgb(140,83,69)] cursor-pointer";
  const disabledStyle = "bg-gray-400 cursor-not-allowed opacity-50";

  return (
    <>
      {shuffledQuestion.map(answer => (
        <li
          key={answer}
          className={`${baseClass} ${cooldown ? disabledStyle : activeStyle}`}
        >
          <button
            onClick={() => !cooldown && handleAnswerQuestion(answer)}
            disabled={cooldown}
            className="w-full text-left"
          >
            {answer}
          </button>
        </li>
      ))}
    </>
  );
}
