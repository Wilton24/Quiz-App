import "../../utils/styles.css"
import Option from "./Option";


export default function Quiz({activeQuestion, questionIndex, handleAnswerQuestion}) {


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