import React, { useState } from 'react';

export default function TaskComponent() {
  const [clicked, setClicked] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h2>{clicked ? "Clicked!" : "Not Clicked"}</h2>
      <button onClick={() => setClicked(true)}>Click Me</button>

      <hr />

      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}
