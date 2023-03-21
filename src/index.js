import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import reportWebVitals from './reportWebVitals';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import axios from 'axios';
import DateRangePicker from './components/DateRangePicker';
import FirstBlock from './blocks/FirstBlock';

const get = () => {
  axios.get('https://test-75e6c-default-rtdb.europe-west1.firebasedatabase.app/users.json?auth=t4NexdBMdNwTjEYk2pWuUuktCeEU1G1uFzLzpETM', {

  }).then((res) => {
    console.log(res.data);
  });
}

let dateChange;

const datepicker = ReactDOM.createRoot(document.getElementById('app-datepicker'));
datepicker.render(
  <AppProvider i18n={enTranslations}>
    <DateRangePicker change={() => dateChange()} />
  </AppProvider>
);

const firstBlock = ReactDOM.createRoot(document.getElementById('app-first-block'));
firstBlock.render(
  <AppProvider i18n={enTranslations}>
    <FirstBlock loader={(callback) => { dateChange = callback }} />
  </AppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
