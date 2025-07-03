// src/components/UserGreeting.js
import { useAuth } from './AuthProvider';

function UserGreeting() {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>Please log in to continue.</p>;
  }

  return (
    <div>
      <p>Welcome, {user.username}!</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default UserGreeting;