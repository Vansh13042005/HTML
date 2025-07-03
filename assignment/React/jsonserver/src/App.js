import React from 'react';
import UserTable from './UserTable'; // Task 1 - JSON Server CRUD
import FirebaseCrud from './FirebaseCrud'; // Task 2 - Firebase with Auth
import EnhancedUserTable from './EnhancedUserTable'; // Task 3 - Error handling

function App() {
  return (
    <div className="App">
      <header>
        <h1>React API Integration Exercises</h1>
      </header>

      <section style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Task 1: JSON Server CRUD</h2>
        <UserTable />
      </section>

      <section style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Task 2: Firebase CRUD with Authentication</h2>
        <FirebaseCrud />
      </section>

      <section style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
        <h2>Task 3: API with Error Handling and Loading States</h2>
        <EnhancedUserTable />
      </section>
    </div>
  );
}

export default App;