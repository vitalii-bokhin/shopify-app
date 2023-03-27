import { useEffect, useState } from 'react';
import Header from './blocks/Header';
import MainContainer from './blocks/MainContainer';
import Sidebar from './blocks/Sidebar';

export default function App() {
    const [appLoading, setAppLoading] = useState(true);

    useEffect(() => {
        console.log('App()');
        setTimeout(() => {
            setAppLoading(false);
        }, 1500);
    }, []);

    return (
        <div className="Polaris-Frame_2qi9y Polaris-Frame--hasNav_wlvjn Polaris-Frame--hasTopBar_1162r"
            data-polaris-layer="true" data-has-navigation="true">
            <div id="AppFrameTopBar" className="Polaris-Frame__TopBar_z6tf9" data-polaris-layer="true"
                data-polaris-top-bar="true">
                <Header appLoading={appLoading} />
            </div>
            <div>
                <div aria-label="Navigation" className="Polaris-Frame__Navigation_1ajsq" id="AppFrameNav">
                    <Sidebar appLoading={appLoading} />
                </div>
            </div>
            <div className="Polaris-Frame__ContextualSaveBar_14m7v Polaris-Frame-CSSAnimation--startFade_1gu4x"></div>
            <main className="Polaris-Frame__Main_yj28s" id="AppFrameMain" data-has-global-ribbon="true">
                <div className="Polaris-Frame__Content_xd1mk">
                    <div id="AppMainContainer" className="Polaris-Page_yisnh Polaris-Page--fullWidth_zyvh4">
                        <MainContainer appLoading={appLoading} />
                    </div>
                </div>
            </main>
        </div>
    );
};
