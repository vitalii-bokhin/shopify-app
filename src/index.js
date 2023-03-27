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
import FirstBlock from './blocks/FirstBlock';
import SecondBlock from './blocks/SecondBlock';
import ThirdBlock from './blocks/ThirdBlock';
import TopBar from './blocks/TopBar';
import ChartBlockComponent from './components/ChartBlockComponent';
import CohortBlock from './blocks/CohortBlock';
import TopProductsBlock from './blocks/TopProductsBlock';
import SessionsBlock from './blocks/SessionsByLocationBlock';
import SimpleTableComponent from './components/SimpleTableComponent';
import SessionsByLocationBlock from './blocks/SessionsByLocationBlock';
import SessionsByDeviceBlock from './blocks/SessionsByDeviceBlock';
import SessionsByTrafficBlock from './blocks/SessionsByTrafficBlock';
import SessionsBySocialBlock from './blocks/SessionsBySocialBlock';
import SalesBySocialBlock from './blocks/SalesBySocialBlock';
import SalesByTrafficSourceBlock from './blocks/SalesByTrafficSourceBlock';
import TopReferrersBySessionsBlock from './blocks/TopReferrersBySessionsBlock';
import TopLandingsBySessionsBlock from './blocks/TopLandingsBySessionsBlock';
import ConversionRateBlock from './blocks/ConversionRateBlock';
import TotalOrdersBlock from './blocks/TotalOrdersBlock';
import AverageOrderBlock from './blocks/AverageOrderBlock';
import SalesToMarketBlock from './blocks/SalesToMarketBlock';

ReactDOM.createRoot(document.getElementById('app-top-bar')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <TopBar />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-first-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <FirstBlock type="sales" />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-second-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <SecondBlock type="sessions" />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-third-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <ThirdBlock type="return_customer_rate" />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-cohort-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <CohortBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-top-products-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <TopProductsBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-sessions-loc-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <SessionsByLocationBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-sessions-device-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <SessionsByDeviceBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-sessions-traffic-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <SessionsByTrafficBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-sessions-social-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <SessionsBySocialBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-sales-social-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <SalesBySocialBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-sales-traffic-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <SalesByTrafficSourceBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-top-referrers-sessions-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <TopReferrersBySessionsBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-top-landings-sessions-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <TopLandingsBySessionsBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-conversion-rate-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <ConversionRateBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-orders-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <TotalOrdersBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-average-order-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <AverageOrderBlock />
        </AppProvider>
    </Provider>
);

ReactDOM.createRoot(document.getElementById('app-sales-to-marketing-block')).render(
    <Provider store={store}>
        <AppProvider i18n={enTranslations}>
            <SalesToMarketBlock />
        </AppProvider>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
