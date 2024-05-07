import React, { useState, useEffect } from 'react';
import './index.css'; 

function App() {
  const [tickerText, setTickerText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#f7c53a'); // Initial background color
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const ticker = document.querySelector('.ticker');

    ticker.setAttribute('data-text', ticker.textContent);
  }, [tickerText]);

  const handleTextChange = (text) => {
    setTickerText(text);
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setBackgroundColor(newColor);
    document.body.style.backgroundColor = newColor; 
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
    setTickerText(newText);
  };

  return (
    <div className="app">
      <div className="background-image"></div> 
      <div className="color-container">
        <label htmlFor="color">bckgrnd: </label> 
        <input
          type="color"
          id="color"
          value={backgroundColor}
          onChange={handleColorChange}
          className='color-box'
        />
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter your text"
          value={inputText}
          onChange={handleChange}
          autoFocus
          className='text-input'
        />
      </div>
      <div className="ticker-container">
        <div className="ticker" data-text={tickerText}>
          <span>{tickerText}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
