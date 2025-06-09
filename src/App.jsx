import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { questions } from "../utils/questions";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(questions);
  const [questionIndex, setActiveQuestionIndex] = useState({
    currentScore: 0,
    currentIndex: 0,
    isLastIndex: false
  });  

  if(questionIndex.currentIndex === activeQuestion.length - 1) {
    setActiveQuestionIndex(prevState => ({...prevState, isLastIndex: true}))
  };

  console.log(questionIndex.currentIndex);
  
  

  function handleAnswerQuestion(answer) {
    if(answer === activeQuestion[questionIndex.currentIndex].answers[0]) {
      setActiveQuestionIndex(prevData => ({...prevData, currentIndex: prevData.currentIndex + 1, currentScore: prevData.currentScore + 1}));
    } else {
      setActiveQuestionIndex(prevData => ({...prevData, currentIndex: prevData.currentIndex + 1}));
    }            
  };

  return(
    <>
      < Header /> 
      {questionIndex.isLastIndex === true ?
       <Result score={questionIndex.currentScore}/> : 
       <Quiz 
        activeQuestion={activeQuestion}
        questionIndex={questionIndex} 
        handleAnswerQuestion={handleAnswerQuestion}/>
      }
    </>
  )
};

export default App;
