import React, { useState } from 'react';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  return (
    <div >
      {isLoggedIn ? (
        <>
          <p >Welcome back!</p>
          <button onClick={handleLogoutClick} >
            Logout
          </button>
        </>
      ) : (
        <>
          <p >Please log in.</p>
          <button onClick={handleLoginClick}>
            Login
          </button>
        </>
      )}
    </div>
  );
}

export default LoginControl;
