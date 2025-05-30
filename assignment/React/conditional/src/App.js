import React from 'react';
import LoginControl from './LoginControl';
import VotingEligibilitycomponent from './VotingEligibilityComponent';
function App() {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      <LoginControl />
      <VotingEligibilitycomponent/>
    </div>
  );
}

export default App;
