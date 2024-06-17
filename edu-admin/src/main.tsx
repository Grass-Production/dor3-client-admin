import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/styles/global.css';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import '@/i18n/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
);
