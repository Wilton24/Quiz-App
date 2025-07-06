
export default function Option({
  activeQuestion,
  questionIndex,
  handleAnswerQuestion }) {

  // Shuffle the answers for the current question
  const shuffledQuestion = activeQuestion[questionIndex.currentIndex].answers.sort(() => Math.random() - 0.5);

  // Initial Class name for the button
  let buttonClassName = "bg-[rgb(140,83,69)] cursor-pointer block w-full text-left text-lg p-[7px] rounded-[10px] m-[10px]";


  return (
    <>
      {shuffledQuestion.map(answer => {
        return <li key={answer} className={buttonClassName}><button onClick={() => handleAnswerQuestion(answer)}>{answer}</button></li>
      })}
    </>
  )
}