import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetDataQuery } from '../app/services/userApi';
import LineChartComponent from '../components/LineChartComponent';
import Loader from '../components/Loader';

function FirstBlock() {
    const date = useSelector((state) => state.datepicker.date);
    const { data, error, isLoading } = useGetDataQuery();
    const [dataFetching, dataFetchingState] = useState(false);
    let resultData = [];

    resultData = data && data.filter((item) => {
        const itemDate = new Date(item.date).setHours(0, 0, 0, 0);
        const dateFrom = new Date(date.from).setHours(0, 0, 0, 0);
        const dateTo = new Date(date.to).setHours(0, 0, 0, 0);

        return dateFrom <= itemDate && itemDate <= dateTo;
    });


    console.log(data);
    console.log(resultData);

    useEffect(() => {
        console.log('FirstBlock', date);
        dataFetchingState(true);
        setTimeout(() => {
            dataFetchingState(false);
        }, 2000);
    }, [date]);

    return dataFetching || isLoading ? <Loader /> : (
        <div className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj">
            <div className="Polaris-LegacyStack__Item_yiyol">
                <div className="fZGUC">
                    <div className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--alignmentCenter_1rtaw">
                        <div
                            className="Polaris-LegacyStack__Item_yiyol Polaris-LegacyStack__Item--fill_vpuzt">
                            <p className="Polaris-Text--root_yj4ah Polaris-Text--headingXl_1dele">$0.00</p>
                        </div>
                        <div className="Polaris-LegacyStack__Item_yiyol"><svg viewBox="0 0 29 24" height="24"
                            width="29" role="img" className="_SVG_15ihc_1" tabIndex="0">
                            <title>No change</title>
                            <rect width="29" height="24" fill="#f6f6f7" rx="12"></rect>
                            <path d="M0.519531 1.79395H12.0039V0.249023H0.519531V1.79395Z" fill="#8c9196"
                                transform="translate(8.5, 11)"></path>
                        </svg></div>
                    </div>
                </div>
            </div>
            <div className="Polaris-LegacyStack__Item_yiyol">
                <table className="bsaOo">
                    <caption hidden="">Total sales</caption>
                </table>
            </div>
            <div className="Polaris-LegacyStack__Item_yiyol">
                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                    tabIndex="0" aria-controls="Polarispopover21" aria-owns="Polarispopover21"
                    aria-expanded="false">
                    <h3 className="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann"><span
                        className="vrNiM">Sales over time</span></h3>
                </button></div>
            </div>
            <div className="Polaris-LegacyStack__Item_yiyol">
                <LineChartComponent data={resultData} period={date} />
            </div>
        </div>
    );
}

export default FirstBlock;