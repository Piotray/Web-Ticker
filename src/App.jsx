import React, { useState } from 'react';
import './index.css'; 

function App() {
  const [tickerText, setTickerText] = useState('');
  const [color, setColor] = useState(''); 
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    const newText = e.target.value;
    setInputText(newText);
    setTickerText(newText); 
  };

  const showColor = (e) => {
    const newColor = e.target.value;
    setColor(newColor);
  };

  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div className="background-image"></div> 
      <div className="color-container">
        <label htmlFor="color">bckgrnd: </label> 
        <input
          type="color"
          id="color"
          value={color}
          onChange={showColor}
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
