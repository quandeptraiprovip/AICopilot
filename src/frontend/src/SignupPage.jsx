import { useState } from 'react';
import './signup.css'; // Import the CSS file
import logo from './assets/logo.png'; // Path to your logo image
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (name && email && password) {
      setMessage('Signup successful! Please log in.');
      
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <img src={logo} alt="Logo" className="chatgpt-logo" />
        <h1 className="title">Create an Account</h1>
        <form onSubmit={handleSignup} className="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
            required
          />
          <button type="submit" className="signup-button">Sign Up</button>
          
        </form>
        {message && <p className="message">{message}</p>}
        <p className="login-link">
          {/* Already have an account? <a href="/login" className="login-link-text">Log In</a> */}
          Already have an acccount? <Link to="/login" className="login-link-text">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
