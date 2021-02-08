import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from './GlobalStyles';
import reportWebVitals from './reportWebVitals';
import themedb from './themedb.json';
import { ThemeProvider } from 'styled-components';
import { FormOpenContextProvider } from './contexts/FormOpenContext';

const theme = themedb;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <FormOpenContextProvider>
        <App />
        <GlobalStyles />
      </FormOpenContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
