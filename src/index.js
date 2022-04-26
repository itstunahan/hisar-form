import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '@shopify/polaris/build/esm/styles.css';

import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider i18n={enTranslations} theme={{ colorScheme: 'light' }}>
    <App />
  </AppProvider>
);
