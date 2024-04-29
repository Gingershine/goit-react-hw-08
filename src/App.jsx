import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { Layout } from './Layout';
import { Routes, Route } from'react-router-dom';
import { selectIsRefreshing } from './redux/auth/selectors';
import { refreshUser } from './redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));


function App() {
 const dispatch = useDispatch();
 const { isRefreshing } = useSelector(selectIsRefreshing);

//  const isLoading = useSelector(selectLoading);
//  const error = useSelector(selectError)

 useEffect(() => {
  dispatch(refreshUser());
 }, [dispatch]); 

  return (
    isRefreshing? <div>Loading...</div> :
    <Layout>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/register"
        element={
          <RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute  component={<LoginPage />} />
        }
      />
      <Route
        path="/contacts"
        element={
          <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
        }
      />
    </Routes>
  </Layout>
);
}

export default App