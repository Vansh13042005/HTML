// src/App.js
import { ThemeProvider } from './ThemeProvider';
import { AuthProvider } from './AuthProvider';
// import ThemeToggle from './ThemeToggle';
import LoginForm from './LoginForm';
import UserGreeting from './UserGreeting';
import Thmed from './Thmed';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div style={{
          padding: '20px',
          minHeight: '100vh',
          transition: 'all 0.3s ease'
        }}>
          <h1>Context API Demo</h1>
          
          <section>
            <h2>Theme Toggle</h2>
            <Thmed />
          </section>

          <section style={{ marginTop: '40px' }}>
            <h2>Authentication</h2>
            <UserGreeting />
            <LoginForm />
          </section>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;