import React from 'react';
import Counter from './Counter';
import DataFetcher from './DataFetcher';
import ReduxCounter from './ReduxCounter';
import RefCounter from './RefCounter';

function App() {
  return (
    <div>
      <h1>React Hooks Exercises</h1>
      
      <section>
        <h2>Task 1: useState Counter</h2>
        <Counter />
      </section>
      
      <section>
        <h2>Task 2: useEffect Data Fetching</h2>
        <DataFetcher />
      </section>
      
      <section>
        <h2>Task 3: Redux with useSelector/useDispatch</h2>
        <ReduxCounter />
      </section>
      
      <section>
        <h2>Task 4: Avoiding Re-renders with useRef</h2>
        <RefCounter />
      </section>
    </div>
  );
}

export default App;