import React, { useState } from 'react'
import Flashcard from './components/Flashcard'
import initialCards from './data/questions'
import "./App.css"

const App = () => {
  const [cards, setCards] = useState(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [newQ, setNewQ] = useState("");
  const [newA, setNewA] = useState("");

  // Navigation
  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Add card
  const addCard = () => {
    if (!newQ || !newA) return;

    const newCard = {
      id: Date.now(),
      question: newQ,
      answer: newA
    };

    setCards([...cards, newCard]);
    setNewQ("");
    setNewA("");
  };

  // Delete card
  const deleteCard = () => {
    const updated = cards.filter((_, i) => i !== currentIndex);
    setCards(updated);
    setCurrentIndex(0);
  };

  // Edit card
  const editCard = () => {
    const updated = [...cards];
    updated[currentIndex] = {
      ...updated[currentIndex],
      question: newQ || updated[currentIndex].question,
      answer: newA || updated[currentIndex].answer
    };
    setCards(updated);
    setNewQ("");
    setNewA("");
  };

  return (
    <div className="App">

      {cards.length > 0 && (
        <Flashcard
          card={cards[currentIndex]}
          currentIndex={currentIndex}
          total={cards.length}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}

      {/* CONTROLS */}
      <div className="controls">
        <input
          placeholder="Enter Question"
          value={newQ}
          onChange={(e) => setNewQ(e.target.value)}
        />
        <input
          placeholder="Enter Answer"
          value={newA}
          onChange={(e) => setNewA(e.target.value)}
        />

        <div className="buttons">
          <button onClick={addCard}>Add</button>
          <button onClick={editCard}>Edit</button>
          <button onClick={deleteCard}>Delete</button>
        </div>
      </div>

    </div>
  );
};

export default App;