
export default function Option({activeQuestion, questionIndex, handleAnswerQuestion}){

const shuffledQuestion = activeQuestion[questionIndex.currentIndex].answers.sort(() => Math.random() - 0.5);

console.log(typeof shuffledQuestion);


  return (
    <>
      {activeQuestion[questionIndex.currentIndex].answers.map(answer => {        
        return  <li key={answer} className="option"><button onClick={() => handleAnswerQuestion(answer)}>{answer}</button></li>
              
      })}
    </>
  )
}