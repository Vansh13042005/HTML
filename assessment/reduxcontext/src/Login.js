import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Login = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={darkTheme ? "container dark" : "container light"}>
      <h3>Amazing service</h3>
      <p>Log in</p>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Log in</button>
      <p>OR</p>
      <button>Create account</button>

      <span className="theme-toggle" onClick={toggleTheme}>
        🌙
      </span>
    </div>
  );
};

export default Login;
