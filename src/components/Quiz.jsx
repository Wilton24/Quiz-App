import "../../utils/styles.css";
import Option from "./Option";
import Progress from "./Progress";

export default function Quiz({
  activeQuestion,
  questionIndex,
  handleAnswerQuestion,
  isStartGame,
  nextQuestion,
  timer,
  cooldown
}) {
  return (
    <div className="quiz-card-container">
      <div className="quiz-card">
        <Progress
          key={questionIndex.currentIndex}
          isStartGame={isStartGame}
          nextQuestion={nextQuestion}
          timer={timer}
          cooldown={cooldown}
        />
        <h2 className="question">
          {activeQuestion[questionIndex.currentIndex].text}
        </h2>
        <ul className="options-list">
          <Option
            activeQuestion={activeQuestion}
            questionIndex={questionIndex}
            handleAnswerQuestion={handleAnswerQuestion}
            cooldown={cooldown} // ✅ pass cooldown here
          />
        </ul>
      </div>
    </div>
  );
}
