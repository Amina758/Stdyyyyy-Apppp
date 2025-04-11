import { useState } from 'react';
import QuizComponent from '../components/QuizComponent';
import './Quizzes.css';

const quizzes = [
  { id: 1, title: 'HTML Basics', icon: '🌐', questions: 20 },
  { id: 21, title: 'CSS Quiz', icon: '🎨', questions: 20 },
  { id: 22, title: 'JavaScript Quiz', icon: 'JS', questions: 20 },
  { id: 23, title: 'React Components Quiz', icon: '⚛️', questions: 20 },
];

function Quizzes() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const handleQuizSelect = (quiz) => {
    setSelectedQuiz(quiz);
  };

  const handleBack = () => {
    setSelectedQuiz(null);
  };

  if (selectedQuiz) {
    return <QuizComponent quizTitle={selectedQuiz.title} onBack={handleBack} />;
  }

  return (
    <div className="quizzes-container">
      <h1>Available Quizzes</h1>
      <div className="quiz-grid">
        {quizzes.map((quiz) => (
          <div 
            key={quiz.id} 
            className="quiz-card"
            onClick={() => handleQuizSelect(quiz)}
          >
            <div className="quiz-icon">{quiz.icon}</div>
            <h2>{quiz.title}</h2>
            <p>{quiz.questions} questions</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Quizzes;