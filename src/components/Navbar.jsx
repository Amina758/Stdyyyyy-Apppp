import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ user, onLogout }) {
  const handleLogout = () => {
    localStorage.removeItem('user');
    onLogout();
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <span className="icon">📚</span>
        Study App
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Quizzes</Link>
        <Link to="/flashcards" className="nav-link">Flashcards</Link>
        <Link to="/notes" className="nav-link">Notes</Link>
        <div className="user-section">
          <span className="username">{user}</span>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;