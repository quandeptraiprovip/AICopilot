import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './LoginPage';  // Your main App component

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <App />,  // Home route for your App
//     },
//     {
//       path: "/signup",
//       element: <SignupPage />,  // Signup page route
//     },
//   ],
//   {
//     future: {
//       v7_startTransition: true,  // Enable the future flag (if you're opting in early)
//     },
//   }
// );


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
