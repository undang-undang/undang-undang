import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './style.css';

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Suspense fallback={ <div style={ { width: '100vw', height: '100vh', background: 'red', position: 'fixed' } }></div> }>

    <App />
  </Suspense>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
