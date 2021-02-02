import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { resolve } from 'path';
import * as dotenv from 'dotenv';
dotenv.config({
  path: resolve(__dirname, '../.env'),
  debug: true
});

require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
