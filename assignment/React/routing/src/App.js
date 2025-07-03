import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Page components
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our website!</p>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>Learn more about us here.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>Get in touch with us.</p>
    </div>
  );
}

function NotFound() {
  return <h2>404 Page Not Found</h2>;
}

function NavBar() {
  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;