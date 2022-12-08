import React, { useState, useEffect } from 'react';
import { MdChangeCircle } from 'react-icons/md';
import './styles/Quotes.css';

const Quotes = () => {
  const [quote, setQuote] = useState({ author: null, content: 'Your quote is being fetched😀' });

  const fetchQuotes = () => {
    fetch('https://quotable.io/random')
      .then((response) => response.json())
      .then((response) => setQuote((prevQuote) => {
        const newQuote = { ...prevQuote };
        newQuote.author = response.author;
        newQuote.content = response.content;
        return newQuote;
      }));
  };

  useEffect(() => {
    fetchQuotes();
  }, []);
  return (
    <>
      <div data-testid="quotes" className="quote-container">
        <button id="new-quote" type="button" onClick={() => fetchQuotes()}>
          <MdChangeCircle style={{ scale: '2' }} />
        </button>
        <p id="quote-content">
          &apos;
          {quote.content}
          &apos;
        </p>
        <p id="quote-author">{quote.author}</p>
      </div>
    </>
  );
};

export default Quotes;
