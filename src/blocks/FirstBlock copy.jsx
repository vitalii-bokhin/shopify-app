import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetDataQuery } from '../app/services/userApi';
import LineChartComponent from '../components/LineChartComponent';
import Loader from '../components/Loader';

function FirstBlock(props) {
    const mainPeriod = useSelector((state) => state.datepicker.mainRange.period);
    const comparativePeriod = useSelector((state) => state.datepicker.comparativeRange.period);
    const isComparison = useSelector((state) => state.datepicker.isComparison);
    const { data, error, isLoading } = useGetDataQuery();
    const [dataFetching, dataFetchingState] = useState(false);
    let resultData = [];
    let compareResultData = [];

    useEffect(() => {
        dataFetchingState(true);
        setTimeout(() => {
            dataFetchingState(false);
        }, 2000);
    }, [mainPeriod]);

    if (data) {
        resultData = data.filter((item) => {
            const itemDate = new Date(item.date).setHours(0, 0, 0, 0);
            const dateFrom = new Date(mainPeriod.from).setHours(0, 0, 0, 0);
            const dateTo = new Date(mainPeriod.to).setHours(0, 0, 0, 0);

            return dateFrom <= itemDate && itemDate <= dateTo;
        });
    }

    if (comparativePeriod.from && comparativePeriod.to && data) {
        compareResultData = data.filter((item) => {
            const itemDate = new Date(item.date).setHours(0, 0, 0, 0);
            const dateFrom = new Date(comparativePeriod.from).setHours(0, 0, 0, 0);
            const dateTo = new Date(comparativePeriod.to).setHours(0, 0, 0, 0);

            return dateFrom <= itemDate && itemDate <= dateTo;
        });
    }

    let total = 0;
    let compareTotal = 0;
    let totalDiff = 0;
    let totalTableDiff = 0;
    let totalFormat = '';
    let totalTableFormat = '';
    let totalTable = '';
    let compareTotalTable = '';
    const titles = {};

    switch (props.type) {
        case 'sales':
            titles.chart = 'Sales over time';
            titles.table = 'Online Store';
            titles.currency = '$';
            total = resultData.reduce((acc, item) => acc + item.sales, 0);
            totalFormat = total.toFixed(2);
            totalTableFormat = total.toFixed(2);
            totalTable = total;
            compareTotal = compareResultData.reduce((acc, item) => acc + item.sales, 0);
            compareTotalTable = compareTotal;
            break;

        case 'sessions':
            titles.chart = 'Sessions over time';
            titles.table = 'Visitors';
            titles.currency = '';
            total = resultData.reduce((acc, item) => acc + item.sessions, 0);
            totalFormat = total;
            compareTotal = compareResultData.reduce((acc, item) => acc + item.sessions, 0);
            totalTable = resultData.reduce((acc, item) => acc + item.visitors, 0);
            totalTableFormat = totalTable;
            compareTotalTable = compareResultData.reduce((acc, item) => acc + item.visitors, 0);
            break;
    }

    if (compareTotal && total) {
        totalDiff = (total - compareTotal) / (total / 100);
    }

    if (compareTotalTable && totalTable) {
        totalTableDiff = (totalTable - compareTotalTable) / (totalTable / 100);
    }

    return dataFetching || isLoading ? <Loader /> : (
        <div className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj">
            <div className="Polaris-LegacyStack__Item_yiyol">
                <div className="fZGUC">
                    <div className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--alignmentCenter_1rtaw">
                        <div className="Polaris-LegacyStack__Item_yiyol Polaris-LegacyStack__Item--fill_vpuzt">
                            <p className="Polaris-Text--root_yj4ah Polaris-Text--headingXl_1dele">
                                {titles.currency}{totalFormat}
                            </p>
                        </div>
                        <div className="Polaris-LegacyStack__Item_yiyol">
                            {isComparison && totalDiff == 0 && (
                                <svg viewBox="0 0 29 24" height="24"
                                    width="29" role="img" className="_SVG_15ihc_1" tabIndex="0">
                                    <title>No change</title>
                                    <rect width="29" height="24" fill="#f6f6f7" rx="12"></rect>
                                    <path d="M0.519531 1.79395H12.0039V0.249023H0.519531V1.79395Z" fill="#8c9196"
                                        transform="translate(8.5, 11)"></path>
                                </svg>
                            )}
                            {isComparison && totalDiff < 0 && (
                                <div className="badge" style={{ color: '#eb4c5e' }}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3L9 9L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 9L3.1875 3.1875" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                    <span>
                                        {Math.abs(totalDiff).toFixed(2)}%
                                    </span>
                                </div>
                            )}
                            {isComparison && totalDiff > 0 && (
                                <div className="badge" style={{ color: '#119d7f' }}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H9V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 3L3.1875 8.8125" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                    <span>
                                        {Math.abs(totalDiff).toFixed(2)}%
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {totalTable > 0 && (
                <div className="Polaris-LegacyStack__Item_yiyol">
                    <table className="bsaOo">
                        <tbody>
                            <tr className="smW4Q">
                                <td className="R6ls0" colSpan="2">{titles.table}</td>
                                <td className="R6ls0 Ay5iz QcJza" colSpan="2">
                                    {titles.currency}{totalTableFormat}
                                </td>
                                {isComparison && totalTableDiff == 0 && (
                                    <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                                        <div className="wqc8b">
                                            <svg viewBox="0 0 29 16" height="16" width="29" role="img" className="_SVG_15ihc_1" tabindex="0">
                                                <title>No change</title>
                                                <rect width="29" height="16" fill="#f6f6f7" rx="8"></rect>
                                                <path d="M0.519531 1.79395H12.0039V0.249023H0.519531V1.79395Z" fill="#8c9196" transform="translate(8.5, 7)"></path>
                                            </svg>
                                        </div>
                                    </td>
                                )}
                                {isComparison && totalTableDiff < 0 && (
                                    <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                                        <div className="badge badge_sm" style={{ color: '#eb4c5e' }}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3L9 9L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 9L3.1875 3.1875" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                            <span>
                                                {Math.abs(totalTableDiff).toFixed(2)}%
                                            </span>
                                        </div>
                                    </td>
                                )}
                                {isComparison && totalTableDiff > 0 && (
                                    <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                                        <div className="badge badge_sm" style={{ color: '#119d7f' }}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H9V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 3L3.1875 8.8125" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                            <span>
                                                {Math.abs(totalTableDiff).toFixed(2)}%
                                            </span>
                                        </div>
                                    </td>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            {/* <div className="Polaris-LegacyStack__Item_yiyol">
                <table className="bsaOo">
                    <caption hidden="">Total sales</caption>
                </table>
            </div> */}
            <div className="Polaris-LegacyStack__Item_yiyol">
                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                    tabIndex="0" aria-controls="Polarispopover21" aria-owns="Polarispopover21"
                    aria-expanded="false">
                    <h3 className="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann"><span
                        className="vrNiM">{titles.chart}</span></h3>
                </button></div>
            </div>
            <div className="Polaris-LegacyStack__Item_yiyol">
                <LineChartComponent
                    data={resultData}
                    compareData={compareResultData}
                    period={mainPeriod}
                    comparePeriod={comparativePeriod}
                    type={props.type}
                />
            </div>
        </div >
    );
}

export default FirstBlock;