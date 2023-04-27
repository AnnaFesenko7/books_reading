import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Notify } from 'notiflix';

import { Layout } from 'components/Layout/Layout';
// import LoginPage from './pages/login/loginPage';
// import RegistrationPage from './pages/registration/registrationPage';
// import ChangePasswordPage from 'pages/changePassword/changePasswordPage';

// import PrivateRoute from './components/routes/privateRoute';
// import PublicRoute from './components/routes/publicRoute';

const Library = lazy(() => import('./pages/library/library'));
const Training = lazy(() => import('./pages/training/training'));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                // <PrivateRoute>
                <Library />
                // </PrivateRoute>
              }
            />

            <Route
              path="training"
              element={
                // <PrivateRoute>
                <Training />
                // </PrivateRoute>
              }
            />
          </Route>

          {/* <Route
              path="/login"
              element={
                <PublicRoute restricted>
                  <LoginPage />
                </PublicRoute>
              }
            /> */}

          {/* <Route
              path="/register"
              element={
                <PublicRoute restricted>
                  <RegistrationPage />
                </PublicRoute>
              }
            /> */}
          {/* 
            <Route
              path="/changePassword"
              element={
                <PublicRoute restricted>
                  <ChangePasswordPage />
                </PublicRoute>
              }
            /> */}

          <Route path="*" element={<p>There is nothing here: 404!</p>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
