import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';  // Import BrowserRouter for routing
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';  // Your main App component
import {Toaster} from 'react-hot-toast';
import axios from 'axios';
import { AuthProvider } from './context/Authen.tsx';
axios.defaults.baseURL = 'http://localhost:5000/api/v1/';
axios.defaults.withCredentials = true;

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

// const router = createBrowserRouter([
//   {
//     element: <RootLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Homepage />,
//       },
//       {
//         path: "/sign-in/*",
//         element: <SignInPage />,
//       },
//       {
//         path: "/sign-up/*",
//         element: <SignUpPage />,
//       },
//       {
//         element: <DashboardLayout />,
//         children: [
//           {
//             path: "/dashboard",
//             element: <DashboardPage />,
//           },
//           {
//             path: "/dashboard/chats/:id",
//             element: <ChatPage />,
//           },
//         ],
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <Router>
      <Toaster position = "top-right"/>
      <App />
    </Router>
    </AuthProvider>
  </StrictMode>,
);
