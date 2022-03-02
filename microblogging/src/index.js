import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFyJa6iyi7Qa8NF1TjmASr9_pbnKQy5_8",
  authDomain: "mytweets-1234.firebaseapp.com",
  projectId: "mytweets-1234",
  storageBucket: "mytweets-1234.appspot.com",
  messagingSenderId: "847638940576",
  appId: "1:847638940576:web:a7df3d455e2c9fa7db32c5"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>
   </Router>,
  document.getElementById('root')
);

