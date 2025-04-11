import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Quizzes from './pages/Quizzes';
import Flashcards from './components/Flashcards';
import Notes from './components/Notes';
import Login from './components/Login';
import './App.css';
import { getUserData, clearUserData } from './data/userData';

function App() {
  const [user, setUser] = useState(getUserData()?.username);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleLogin = (username) => {
    setUser(username);
    setShowWelcome(true);
    setTimeout(() => setShowWelcome(false), 3000);
  };
  
  const handleLogout = () => {
    clearUserData();
    setUser(null);
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar user={user} onLogout={handleLogout} />
        {showWelcome && (
          <div className="welcome-message">
            Welcome, {user}!
          </div>
        )}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Quizzes />} />
            <Route path="/flashcards" element={<Flashcards />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
