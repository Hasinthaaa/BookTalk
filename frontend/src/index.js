import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' instead of 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

// Ensure the root element exists
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found in the HTML.');
}

// Create a root container
const root = ReactDOM.createRoot(rootElement);

// Render your app with the root container
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
