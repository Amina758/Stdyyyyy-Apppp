import { useState } from 'react';
import './Notes.css';

function Notes() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle note submission
  };

  return (
    <div className="notes-container">
      <h1>Add New Note</h1>
      <form onSubmit={handleSubmit} className="note-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="add-note-btn">+ Add Note</button>
      </form>
    </div>
  );
}

export default Notes;