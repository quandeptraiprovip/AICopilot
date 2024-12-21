import { RequireAuth } from 'react-auth-kit';

const ProtectedRoute = ({ children }) => {
  return <RequireAuth loginPath="/login">{children}</RequireAuth>;
};

export default ProtectedRoute;