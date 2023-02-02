import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

import Details from './pages/Details/Details'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={ theme } >
      <GlobalStyles />
      <Details />
    </ThemeProvider>
  </React.StrictMode>,
)
