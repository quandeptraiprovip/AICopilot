import { useState } from 'react';
import './login.css'; // Import the CSS file
import logo from './assets/logo.png'; // Your logo image path 

import googleLogo from './assets/Google_logo.svg.png'; // Google logo image path
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'user@example.com' && password === 'password') {
      setMessage('Login successful!');
    } else {
      setMessage('Invalid email or password.');
    }
  };

  const handleGoogleLogin = () => {
    setMessage('Logging in with Google...');
    // Add your Google login integration here
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={logo} alt="Logo" className="chatgpt-logo" />
        <h1 className="name">Only Chat</h1>
        <h1 className="title">Welcome Back</h1>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <button type="submit" className="login-button">Log In</button>
        </form>
        <button className="google-login-button" onClick={handleGoogleLogin}>
          <img src={googleLogo} alt="Google Icon" className="google-logo" />
          Login with Google
        </button>
        <p className="forgot-password">Forgot your password?</p>
        <p className="sign-up">Don't have an account? <Link to="/signup" className="sign-up-link">Sign up here</Link>
        </p>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
