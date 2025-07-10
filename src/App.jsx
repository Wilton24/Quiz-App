import { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import WelcomeCard from "./components/WelcomeCard";
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

  const [isStartGame, setIsStartGame] = useState(false);
  const [playername, setPlayername] = useState('');
  const [answerState, setAnswerState] = useState('');
  const [cooldown, setCooldown] = useState(false);


  const [isTimerExpired, setIsTimerExpired] = useState(false);

  const [timer, setTimer] = useState(5000); // 3 seconds timer

  const quizFinished = questionIndex.currentIndex === activeQuestion.length - 1;

  function handleAnswerQuestion(answer) {
    if (answer === activeQuestion[questionIndex.currentIndex].answers[0]) {
      setAnswerState("correct");
      // Setting timer to 3 seconds before proceeding to the next question
      setTimer(3000);
      setCooldown(true);
      setActiveQuestionIndex(prevData => ({ ...prevData, currentIndex: prevData.currentIndex + 1, currentScore: prevData.currentScore + 1 }));

    } else {
      nextQuestion();
      setAnswerState("wrong");
      // Setting timer to 3 seconds before proceeding to the next question
      setTimer(3000);
      setCooldown(true);
    }
  };

  function nextQuestion() {
    setActiveQuestionIndex(prevData => ({ ...prevData, currentIndex: prevData.currentIndex + 1 }));
  }

  function handleSubmitPlayerName(playername) {
    if (playername.trim() === '') {
      alert('Name cannot be blank');
      return;
    }
    setPlayername(playername)
  };

  function startGame() {
    if (playername.trim() === '') {
      alert('Please enter your name');
      return;
    }
    setIsStartGame(true);
  }

  // useCallback(() => {

  // }, [])

  // let content = null;
  // if (isStartGame === false) {
  //   content = <WelcomeCard
  //     playername={playername}
  //     handleSubmitPlayerName={handleSubmitPlayerName}
  //     startGame={startGame}
  //   />
  // } else {
  //   content = quizFinished == true ?
  //     <Result
  //       score={questionIndex.currentScore}
  //       totalitems={activeQuestion.length} /> :
  //     <Quiz
  //       activeQuestion={activeQuestion}
  //       questionIndex={questionIndex}
  //       handleAnswerQuestion={handleAnswerQuestion}
  //       isStartGame={isStartGame}
  //       nextQuestion={nextQuestion}
  //       timer={timer}
  //       cooldown={cooldown} />
  // }

  let content = quizFinished == true ?
    <Result
      score={questionIndex.currentScore}
      totalitems={activeQuestion.length} /> :
    // `12
    <Quiz
      activeQuestion={activeQuestion}
      questionIndex={questionIndex}
      handleAnswerQuestion={handleAnswerQuestion}
      isStartGame={isStartGame}
      nextQuestion={nextQuestion}
      timer={timer}
      cooldown={cooldown} />

  return (
    <>
      < Header />
      {content}
    </>
  )
};

export default App;
