import { useState } from 'react';
import { allQuestions } from '../data/allQuestions';
import './QuizComponent.css';

function QuizComponent({ quizTitle, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = allQuestions[quizTitle] || [];

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  if (!questions.length) {
    return <div>No questions available for this quiz.</div>;
  }

  return (
    <div className="quiz-container">
      <button className="back-button" onClick={onBack}>← Back to Quizzes</button>
      <h2>{quizTitle}</h2>
      
      {showScore ? (
        <div className="score-section">
          <h2>Quiz Completed!</h2>
          <p>You scored {score} out of {questions.length}</p>
          <button onClick={restartQuiz}>Restart Quiz</button>
          <button onClick={onBack}>Back to Quiz List</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">
            {questions[currentQuestion].question}
          </div>
          <div className="answer-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className="answer-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizComponent;