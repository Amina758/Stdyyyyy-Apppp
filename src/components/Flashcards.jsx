import { useState } from 'react';
import './Flashcards.css';

function Flashcards() {
  const [cards, setCards] = useState([]);
  const [front, setFront] = useState('');
  const [back, setBack] = useState('');
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleAddCard = (e) => {
    e.preventDefault();
    if (front && back) {
      setCards([...cards, { front, back }]);
      setFront('');
      setBack('');
    }
  };

  const handleDelete = (index) => {
    const newCards = cards.filter((_, i) => i !== index);
    setCards(newCards);
    if (currentCard >= newCards.length) {
      setCurrentCard(Math.max(0, newCards.length - 1));
    }
    setIsFlipped(false);
  };

  const handleNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  return (
    <div className="flashcards-container">
      <h1>Flashcards</h1>
      
      <form onSubmit={handleAddCard} className="card-form">
        <input
          type="text"
          placeholder="Front of card"
          value={front}
          onChange={(e) => setFront(e.target.value)}
        />
        <input
          type="text"
          placeholder="Back of card"
          value={back}
          onChange={(e) => setBack(e.target.value)}
        />
        <button type="submit">Add Card</button>
      </form>

      {cards.length > 0 ? (
        <div className="card-display">
          <div 
            className={`card ${isFlipped ? 'flipped' : ''}`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <div className="card-inner">
              <div className="card-front">
                {cards[currentCard].front}
              </div>
              <div className="card-back">
                {cards[currentCard].back}
              </div>
            </div>
          </div>
          <div className="card-controls">
            <button onClick={handlePrevious} disabled={currentCard === 0}>Previous</button>
            <span>{currentCard + 1} / {cards.length}</span>
            <button onClick={handleNext} disabled={currentCard === cards.length - 1}>Next</button>
            <button 
              onClick={() => handleDelete(currentCard)}
              className="delete-btn"
            >
              Delete Card
            </button>
          </div>
        </div>
      ) : (
        <p>No flashcards yet. Add some cards to get started!</p>
      )}
    </div>
  );
}

export default Flashcards;