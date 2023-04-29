import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
// import { ThemeProvider } from '@emotion/react';
import { ThemeProvider } from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import App from './App';
import { theme } from 'constants/styleTheme';

import '/node_modules/modern-normalize/modern-normalize.css';
import './i18n';
import './index.scss';
// import { Outlet } from 'react-router-dom';

// const Theme = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Outlet />
//     </ThemeProvider>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/books_reading">
      <Provider store={store}>
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Suspense>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
