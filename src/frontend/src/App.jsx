import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';  // Import the LoginPage component
import SignupPage from './SignupPage';  // Import the SignupPage component

function App() {
  return (
    <Routes>
      {/* Route for the default login page */}
      <Route path="/" element={<LoginPage />} /> {/* Route for the base path */}
      
      {/* Route for the login page */}
      <Route path="/login" element={<LoginPage />} /> 

      {/* Route for the signup page */}
      <Route path="/signup" element={<SignupPage />} /> 
    </Routes>
  );
}

export default App;
