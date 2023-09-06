import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Wenn Sie die Leistung in Ihrer App messen möchten, geben Sie eine Funktion
// an, um die Ergebnisse zu protokollieren (z. B. reportWebVitals(console.log))
// oder senden Sie sie an einen Analyse-Endpunkt. Erfahren Sie mehr: https://bit.ly/CRA-vitals
reportWebVitals();
