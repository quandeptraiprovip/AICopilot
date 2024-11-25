import React, { useState } from 'react';
import './login.css'; // Import the CSS file

const LoginBox = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid username or password.');
    }
  };

  return (
    <div className="login-box">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
        <button type="submit" className="button">
          Login
        </button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default LoginBox;
