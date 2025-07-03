import React, { useState, useRef, useEffect } from 'react';

function RefCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);
  const inputRef = useRef();

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <p>This component has rendered {renderCount.current} times</p>
      
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
    </div>
  );
}

export default RefCounter;