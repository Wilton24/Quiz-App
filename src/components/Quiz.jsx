// import { useEffect, useState } from "react";
import "../../utils/styles.css"
import Option from "./Option";
import Progress from "./Progress";


export default function Quiz({activeQuestion, questionIndex, handleAnswerQuestion, isStartGame, nextQuestion}) {
  return (
    <>    
      <div className="quiz-card-container">
          <div className="quiz-card">
            <Progress isStartGame={isStartGame} nextQuestion={nextQuestion}/>            
            <h2 className="question">{activeQuestion[questionIndex.currentIndex].text}</h2>
            <ul className="options-list">
                <Option 
                  activeQuestion={activeQuestion}
                  questionIndex={questionIndex}
                  handleAnswerQuestion={handleAnswerQuestion} />
            </ul>
          </div>          
        

      </div>
    </>



  )
};