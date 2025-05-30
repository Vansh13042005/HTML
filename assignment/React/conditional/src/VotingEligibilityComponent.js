import React, { useState } from 'react';

function VotingEligibilitycomponent() {
  const [age, setAge] = useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  };

  const isEligible = Number(age) >= 18;

  return (
    <div className="p-4">
      <label >
        Enter your age:
        <input
          type="number"
          value={age}
          onChange={handleChange}
          
        />
      </label>
      {age !== '' && (
        <p>
          {isEligible ? 'You are eligible to vote.' : 'You are not eligible to vote.'}
        </p>
      )}
    </div>
  );
}

export default VotingEligibilitycomponent;
