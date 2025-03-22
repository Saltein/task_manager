import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';
import { worker } from './shared/mocks/browser';

import {API_URL} from './shared/config/api'

if (process.env.NODE_ENV === 'development'){
  worker.listen()
  async function app() {
    const response = await fetch(`${API_URL}/tasks`)
    const task = await response.json()
    console.log(task)
    
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);