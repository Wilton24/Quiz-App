import { useState, useRef } from "react"
import "../../utils/styles.css"

export default function Quiz() {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  return (
    <>
      <div>Quiz</div>    
      <div className="quiz-card-container">
        <div className="quiz-card">
          <h2 className="question">1. Which of the following definitions best describes React.js?</h2>
          <ul className="options-list">
              <li className="option"><button>A library to build user interfaces with help of declarative code.</button></li>
              <li className="option"><button>A library for managing state in web applications.</button></li>
              <li className="option"><button>A framework to build user interfaces with help of imperative code.</button></li>
              <li className="option"><button>A library used for building mobile applications only.</button></li>
          </ul>
        </div>
      </div>
    </>



  )
};