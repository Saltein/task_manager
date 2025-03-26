import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './app/App';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  try {
    const { worker } = await import('./shared/mocks/browser');

    await worker.start({
      onUnhandledRequest: 'warn', // Логируем все неизвестные запросы
    });

  } catch (error) {
    console.error('MSW не смог запуститься', error);
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
enableMocking().then(() => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}) 
