import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import DateRangePicker from './components/DateRangePicker';
import FirstBlock from './blocks/FirstBlock';

const datepicker = ReactDOM.createRoot(document.getElementById('app-datepicker'));
datepicker.render(
  <Provider store={store}>
    <AppProvider i18n={enTranslations}>
      <DateRangePicker />
    </AppProvider>
  </Provider>
);

const firstBlock = ReactDOM.createRoot(document.getElementById('app-first-block'));
firstBlock.render(
  <Provider store={store}>
    <AppProvider i18n={enTranslations}>
      <FirstBlock />
    </AppProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
