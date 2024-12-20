import { Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';  // Import the LoginPage component
import SignupPage from './SignupPage';  // Import the SignupPage component
import ChatPage from './ChatPage';

function App() {
  return (
    <Routes>
      {/* Route for the default login page */}
      <Route path="/" element={<LoginPage />} /> {/* Route for the base path */}
      
      {/* Route for the login page */}
      <Route path="/login" element={<LoginPage />} /> 

      {/* Route for the signup page */}
      <Route path="/signup" element={<SignupPage />} /> 

      {/* <Route path="/chatpage" element={<ChatPage />} />  */}
    </Routes>
  );
}

export default App;
