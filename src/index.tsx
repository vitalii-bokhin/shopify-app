import ReactDOM from 'react-dom/client';
import './index.css';
import './styles.css';
import { store } from './app/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import '@shopify/polaris/build/esm/styles.css';
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import App from './App';

ReactDOM.createRoot(document.getElementById('AppFrame')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <App />
        </AppProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
