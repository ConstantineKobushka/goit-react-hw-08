import { lazy, Suspense, useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));
const RegistrationPage = lazy(
  () => import('./pages/RegistrationPage/RegistrationPage')
);
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import Layout from './components/Layout/Layout';
import Loader from './components/Loader/Loader';

import { selectAuthIsRefreshing } from './redux/auth/selectors';
import { apiRefreshUser } from './redux/auth/operations';

const App = () => {
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  if (isRefreshing) return <Loader />;

  return (
    <Layout>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={<PrivateRoute element={<ContactsPage />} />}
          />
          <Route
            path="/register"
            element={<RestrictedRoute element={<RegistrationPage />} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute element={<LoginPage />} />}
          />
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
