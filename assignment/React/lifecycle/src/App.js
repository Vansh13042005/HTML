import React, { useState } from 'react';
import DataFetcher from './DataFetcher';
import LifecycleLogger from './LifecycleLogger';

function App() {
  const [showLogger, setShowLogger] = useState(true);

  return (
    <div>
      <h1>React Class Component Tasks</h1>
      
      <section>
        <h2>Task 1: Data Fetching</h2>
        <DataFetcher />
      </section>
      
      <section>
        <h2>Task 2: Lifecycle Methods</h2>
        <button onClick={() => setShowLogger(!showLogger)}>
          {showLogger ? 'Hide' : 'Show'} Logger Component
        </button>
        {showLogger && <LifecycleLogger />}
      </section>
    </div>
  );
}

export default App;