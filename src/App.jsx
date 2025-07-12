import { useState } from "react";
import Header from "./components/Header";
import WelcomeCard from "./components/WelcomeCard";
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import { questions } from "../utils/questions";

function App() {
  const [activeQuestion, setActiveQuestion] = useState(questions);
  const [questionIndex, setActiveQuestionIndex] = useState({
    currentScore: 0,
    currentIndex: 0
  });

  const [isStartGame, setIsStartGame] = useState(false);
  const [playername, setPlayername] = useState('');
  const [answerState, setAnswerState] = useState('');
  const [cooldown, setCooldown] = useState(false);
  const [timer, setTimer] = useState(5000);

  const quizFinished = questionIndex.currentIndex === activeQuestion.length;

  function handleAnswerQuestion(answer) {
    setCooldown(true);
    setTimer(3000);

    const correct = activeQuestion[questionIndex.currentIndex].answers[0];

    if (answer && answer === correct) {
      setAnswerState("correct");
      setActiveQuestionIndex(prev => ({
        ...prev,
        currentIndex: prev.currentIndex + 1,
        currentScore: prev.currentScore + 1
      }));
    } else {
      setAnswerState("wrong");
      nextQuestion();
    }
  }

  function nextQuestion() {
    setTimeout(() => {
      setCooldown(false);
      setTimer(5000);
      setAnswerState('');
    }, 3000);
  }

  function handleSubmitPlayerName(name) {
    if (name.trim() === '') {
      alert('Name cannot be blank');
      return;
    }
    setPlayername(name);
  }

  function startGame() {
    if (playername.trim() === '') {
      alert('Please enter your name');
      return;
    }
    setIsStartGame(true);
  }

  let content = !isStartGame
    ? <WelcomeCard
      playername={playername}
      handleSubmitPlayerName={handleSubmitPlayerName}
      startGame={startGame}
    />
    : quizFinished
      ? <Result score={questionIndex.currentScore} totalitems={activeQuestion.length} />
      : <Quiz
        activeQuestion={activeQuestion}
        questionIndex={questionIndex}
        handleAnswerQuestion={handleAnswerQuestion}
        isStartGame={isStartGame}
        nextQuestion={nextQuestion}
        timer={timer}
        cooldown={cooldown}
      />;

  return (
    <>
      <Header />
      {content}
    </>
  );
}

export default App;
