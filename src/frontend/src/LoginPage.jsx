import { useSignIn } from 'react-auth-kit';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const signIn = useSignIn(); // Hook để đăng nhập
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Gửi thông tin đăng nhập đến API
      const response = await axios.post('http://localhost:5000/login', {
        email,
        password,
      });

      const { token, expiresIn, user } = response.data;

      // Đăng nhập người dùng bằng React-Auth-Kit
      const success = signIn({
        token,
        expiresIn: expiresIn / 60, // Phút
        tokenType: 'Bearer',
        authState: { user }, // Lưu thêm thông tin người dùng
      });

      if (success) {
        setMessage('Login successful!');
        navigate('/protected'); // Điều hướng đến trang bảo mật
      } else {
        setMessage('Failed to log in.');
      }
    } catch (error) {
      setMessage('Invalid email or password.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default LoginPage;
