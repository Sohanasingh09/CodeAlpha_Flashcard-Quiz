import React, { useState, useEffect } from 'react'
import "../components/Flashcard.css"

const Flashcard = ({ card, onPrev, onNext, currentIndex, total }) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    setFlipped(false);
  }, [card]);

  return (
    <div className="card-container">
      <h1>Flashcards</h1>

      <div className={`card ${flipped ? "flipped" : ""}`}>
  
  <div className="card-inner">   

    <div className="card-face front">
      <h3>{card.question}</h3>
      <button onClick={() => setFlipped(true)}>Show Answer</button>
    </div>

    <div className="card-face back">
      <h3>{card.answer}</h3>
      <button onClick={() => setFlipped(false)}>Back</button>
    </div>

  </div>

</div>

      <div className="navigation">
        <button onClick={onPrev} disabled={currentIndex === 0}>Prev</button>
        <span>{currentIndex + 1}/{total}</span>
        <button onClick={onNext} disabled={currentIndex === total - 1}>Next</button>
      </div>
    </div>
  );
};

export default Flashcard;
