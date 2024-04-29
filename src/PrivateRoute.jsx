import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/auth/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/login' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('selectIsLoggedIn: ', selectIsLoggedIn);
  console.log('isLoggedIn: ', isLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
