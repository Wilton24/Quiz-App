import { useEffect, useState } from "react";
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

  const quizFinished =questionIndex.currentIndex === activeQuestion.length - 1;

  // useEffect(()=>{
  //   if(questionIndex.currentIndex >= activeQuestion.length - 1) {
  //     setActiveQuestionIndex(prevState => ({...prevState, isLastIndex: true}))
  //   };    
  // }, [])



  function handleAnswerQuestion(answer) {
    if(quizFinished) return;
    if(answer === activeQuestion[questionIndex.currentIndex].answers[0]) {
      setActiveQuestionIndex(prevData => ({...prevData, currentIndex: prevData.currentIndex + 1, currentScore: prevData.currentScore + 1}));
    } else {
      setActiveQuestionIndex(prevData => ({...prevData, currentIndex: prevData.currentIndex + 1}));
    }            
  };

  return(
    <>
      < Header /> 
      {quizFinished == true ?
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
