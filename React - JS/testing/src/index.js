import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Page1 from './my screens/page1';
import Page2 from './my screens/page2';
import Page3 from './my screens/Page3';
import Page4 from './my screens/Page4';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  // <Page1 name = "Arpan" estb = "09/06/2023"/>
  // <Page2/>
  // <Page3/>
  <Page4/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
