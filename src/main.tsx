import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from '../config/i18n';
import { NotificationProvider, ThemeModeProvider } from '~/context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <NotificationProvider>
        <ThemeModeProvider>
          <App />
        </ThemeModeProvider>
      </NotificationProvider>
    </I18nextProvider>
  </React.StrictMode>,
);
