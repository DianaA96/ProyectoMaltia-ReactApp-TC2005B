import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import Pruebas from './ContactoAsesor'


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Pruebas/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
