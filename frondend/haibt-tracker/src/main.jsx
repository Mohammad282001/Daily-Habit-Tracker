// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { DateProvider } from './contexts/DateContext';

createRoot(document.getElementById('root')).render(
  <DateProvider>
    <App />
  </DateProvider>
);