import { Navigate } from 'react-router-dom';

export interface PrivateRouteProps {}

export const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  // Check user logged in
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  return isLoggedIn ? children : <Navigate to='/login' />;
};
