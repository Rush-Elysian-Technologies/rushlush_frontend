import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContext } from './Context';

const checkCustomer = localStorage.getItem('customer_login');

const userContextValue = {
  login: checkCustomer, // Assuming 'checkCustomer' is a boolean value
  // Add other user context properties if needed
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserContext.Provider value={userContextValue}>
        <App />
      </UserContext.Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
