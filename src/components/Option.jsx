
export default function Option({activeQuestion, questionIndex, handleAnswerQuestion}){
  

  return (

    <>
      {activeQuestion[questionIndex.currentIndex].answers.map(answer => 
        <li key={answer} className="option"><button onClick={() => handleAnswerQuestion(answer)}>{answer}</button></li>
        )}
    </>

    // <li className="option"><button>{activeQuestion[0].answers[0]}</button></li>


  )
}