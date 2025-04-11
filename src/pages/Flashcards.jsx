import { useState } from 'react';
import './Flashcards.css';

function Flashcards() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flashcards-container">
      <h1>Flashcards</h1>
      <div className="flashcards-header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search cards..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="add-card-btn">+ Add Card</button>
      </div>
      <div className="flashcard">
        <div className="flashcard-content">
          <p>react</p>
        </div>
      </div>
      <div className="pagination">
        <button className="prev-btn">Previous</button>
        <span>1 / 1</span>
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
}

export default Flashcards;