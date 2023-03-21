import { useState } from 'react';
import LineChartComponent from '../components/LineChartComponent';
import Loader from '../components/Loader';


const FirstBlock = (props) => {

    const [dataFetching, dataFetchingState] = useState(false);

    // window.addEventListener('dateSelected', () => {
    //     dataFetchingState(true);
    //     setTimeout(() => {
    //         dataFetchingState(false);
    //     }, 2000);
    // });

    props.loader(() => {
        dataFetchingState(true);
        setTimeout(() => {
            dataFetchingState(false);
        }, 2000);
    });

    return dataFetching ? <Loader /> : (
        <div class="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj">
            <div class="Polaris-LegacyStack__Item_yiyol">
                <div class="fZGUC">
                    <div class="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--alignmentCenter_1rtaw">
                        <div
                            class="Polaris-LegacyStack__Item_yiyol Polaris-LegacyStack__Item--fill_vpuzt">
                            <p class="Polaris-Text--root_yj4ah Polaris-Text--headingXl_1dele">$0.00</p>
                        </div>
                        <div class="Polaris-LegacyStack__Item_yiyol"><svg viewBox="0 0 29 24" height="24"
                            width="29" role="img" class="_SVG_15ihc_1" tabindex="0">
                            <title>No change</title>
                            <rect width="29" height="24" fill="#f6f6f7" rx="12"></rect>
                            <path d="M0.519531 1.79395H12.0039V0.249023H0.519531V1.79395Z" fill="#8c9196"
                                transform="translate(8.5, 11)"></path>
                        </svg></div>
                    </div>
                </div>
            </div>
            <div class="Polaris-LegacyStack__Item_yiyol">
                <table class="bsaOo">
                    <caption hidden="">Total sales</caption>
                </table>
            </div>
            <div class="Polaris-LegacyStack__Item_yiyol">
                <div><button aria-describedby="DefinitionPopoverContent1" type="button" class="krQ22"
                    tabindex="0" aria-controls="Polarispopover21" aria-owns="Polarispopover21"
                    aria-expanded="false">
                    <h3 class="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann"><span
                        class="vrNiM">Sales over time</span></h3>
                </button></div>
            </div>
            <div className="Polaris-LegacyStack__Item_yiyol">
                <LineChartComponent />
            </div>
        </div>
    );
}

export default FirstBlock;