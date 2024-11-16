import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { ContactProvider } from './Context/ContactContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ContactProvider>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </ContactProvider>
    </BrowserRouter>
  </React.StrictMode>
);

