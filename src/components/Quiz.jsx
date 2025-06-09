import { useState } from "react"
import "../../utils/styles.css"
import Option from "./Option";
import { questions } from "../../utils/questions";

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState(questions);
  const [questionIndex, setActiveQuestionIndex] = useState({
    currentScore: 0,
    currentIndex: 0,
    isLastIndex: false
  });  

  if(questionIndex.currentIndex === activeQuestion.length - 1) {
    setActiveQuestionIndex(prevState => ({...prevState, isLastIndex: true}))
  };

  function handleAnswerQuestion(answer) {
    if(questionIndex.isLastIndex === true) return;
    if(answer === activeQuestion[questionIndex.currentIndex].answers[0]) {
      setActiveQuestionIndex(prevData => ({...prevData, currentIndex: prevData.currentIndex + 1, currentScore: prevData.currentScore + 1}));
    } else {
      setActiveQuestionIndex(prevData => ({...prevData, currentIndex: prevData.currentIndex + 1}));
    }            
  };

  return (
    <>    
      <div className="quiz-card-container">

        {questionIndex.isLastIndex ? 
          <div>Quiz Finished</div>:
          <div className="quiz-card">
            <h2 className="question">{activeQuestion[questionIndex.currentIndex].text}</h2>
            <ul className="options-list">
                <Option 
                  activeQuestion={activeQuestion}
                  questionIndex={questionIndex}
                  handleAnswerQuestion={handleAnswerQuestion} />
            </ul>
          </div>          
          }
        

      </div>
    </>



  )
};