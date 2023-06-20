import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContentLoader from '../components/ContentLoader';

const TbRow = (props) => {
    return (
        <tbody>
            <tr className="smW4Q">
                <td className="R6ls0" colSpan="2">
                    <div>
                        <p>{props.title}</p>
                        <p>
                            <span className="Polaris-Text--root_yj4ah Polaris-Text--bodyMd_jaf4s Polaris-Text--subdued_17vaa">
                                {props.sessions ? props.sessions.toLocaleString('en-US') : 0} sessions
                            </span>
                        </p>
                    </div>
                </td>
                <td className="R6ls0 Ay5iz QcJza" colSpan="2">{props.rate}%</td>

                {props.rateDiff === 0 && (
                    <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                        <div className="wqc8b"><svg viewBox="0 0 29 16" height="16" width="29" role="img"
                            className="_SVG_15ihc_1" tabIndex="0">
                            <title>No change</title>
                            <rect width="29" height="16" fill="#f6f6f7" rx="8"></rect>
                            <path d="M0.519531 1.79395H12.0039V0.249023H0.519531V1.79395Z"
                                fill="#8c9196" transform="translate(8.5, 7)"></path>
                        </svg></div>
                    </td>
                )}
                {!!props.rateDiff && props.rateDiff < 0 && (
                    <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                        <div className="badge badge_sm" style={{ color: '#eb4c5e' }}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3L9 9L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 9L3.1875 3.1875" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                            <span>
                                {Math.abs(props.rateDiff).toFixed(2)}%
                            </span>
                        </div>
                    </td>
                )}
                {!!props.rateDiff && props.rateDiff > 0 && (
                    <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                        <div className="badge badge_sm" style={{ color: '#119d7f' }}>
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H9V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 3L3.1875 8.8125" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                            <span>
                                {Math.abs(props.rateDiff).toFixed(2)}%
                            </span>
                        </div>
                    </td>
                )}
            </tr>
        </tbody>
    );
}

export default function ConversionRateBlock({ data, isLoading }) {
    const mainPeriod = useSelector((state) => state.datepicker.mainRange.period);
    const comparativePeriod = useSelector((state) => state.datepicker.comparativeRange.period);
    const [dataFetching, dataFetchingState] = useState(true);

    useEffect(() => {
        dataFetchingState(true);
        setTimeout(() => {
            dataFetchingState(false);
        }, 2000);
    }, [mainPeriod, comparativePeriod]);

    let resultData = [];
    let compareResultData = [];

    if (data) {
        resultData = data
            .filter((item) => {
                const itemDate = new Date(item.date).setHours(0, 0, 0, 0);
                const dateFrom = new Date(mainPeriod.from).setHours(0, 0, 0, 0);
                const dateTo = new Date(mainPeriod.to).setHours(0, 0, 0, 0);

                return dateFrom <= itemDate && itemDate <= dateTo;
            });
    }

    if (comparativePeriod.from && comparativePeriod.to && data) {
        compareResultData = data
            .filter((item) => {
                const itemDate = new Date(item.date).setHours(0, 0, 0, 0);
                const dateFrom = new Date(comparativePeriod.from).setHours(0, 0, 0, 0);
                const dateTo = new Date(comparativePeriod.to).setHours(0, 0, 0, 0);

                return dateFrom <= itemDate && itemDate <= dateTo;
            });
    }

    const sessionsSum = resultData.reduce((acc, item) => acc + item.sessions, 0);

    const addedToCartSum = resultData.reduce((acc, item) => acc + item.cart, 0);
    const addedToCartRate = (addedToCartSum / sessionsSum) * 100;

    const checkoutSum = resultData.reduce((acc, item) => acc + item.checkout, 0);
    const checkoutRate = (checkoutSum / sessionsSum) * 100;

    const convSessionsSum = resultData.reduce((acc, item) => acc + item.converted_sessions
        , 0);
    const convertedRate = (convSessionsSum / sessionsSum) * 100;

    const total = convertedRate ? convertedRate.toFixed(2) : 0;
    let totalDiff = null;
    const items = [
        {
            id: 1,
            title: 'Added to cart',
            sessions: addedToCartSum,
            rate: addedToCartRate.toFixed(2),
            rateDiff: null,
        },
        {
            id: 2,
            title: 'Reached checkout',
            sessions: checkoutSum,
            rate: checkoutRate.toFixed(2),
            rateDiff: null,
        },
        {
            id: 3,
            title: 'Sessions converted',
            sessions: convSessionsSum,
            rate: convertedRate.toFixed(2),
            rateDiff: null,
        },
    ];

    if (compareResultData.length) {
        const sessionsSumCom = compareResultData.reduce((acc, item) => acc + item.sessions, 0);

        const addedToCartSumCom = compareResultData.reduce((acc, item) => acc + item.cart, 0);
        const addedToCartRateCom = (addedToCartSumCom / sessionsSumCom) * 100;

        const checkoutSumCom = compareResultData.reduce((acc, item) => acc + item.checkout, 0);
        const checkoutRateCom = (checkoutSumCom / sessionsSumCom) * 100;

        const convSessionsSumCom = compareResultData.reduce((acc, item) => acc + item.converted_sessions
            , 0);
        const convertedRateCom = (convSessionsSumCom / sessionsSumCom) * 100;

        totalDiff = (convertedRateCom - convertedRate) / (convertedRate / 100);

        items[0].rateDiff = (addedToCartRateCom - addedToCartRate) / (addedToCartRate / 100);
        items[1].rateDiff = (checkoutRateCom - checkoutRate) / (checkoutRate / 100);
        items[2].rateDiff = (convertedRateCom - convertedRate) / (convertedRate / 100);
    }

    return isLoading || dataFetching ? <ContentLoader /> : (
        <div className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj">
            <div className="Polaris-LegacyStack__Item_yiyol">
                <div className="fZGUC">
                    <div className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--alignmentCenter_1rtaw">
                        <div
                            className="Polaris-LegacyStack__Item_yiyol Polaris-LegacyStack__Item--fill_vpuzt">
                            <p className="Polaris-Text--root_yj4ah Polaris-Text--headingXl_1dele">
                                {total ? Number(total).toLocaleString('en-US') : 0}%
                            </p>
                        </div>
                        <div className="Polaris-LegacyStack__Item_yiyol">
                            {totalDiff === 0 && (
                                <svg viewBox="0 0 29 24" height="24"
                                    width="29" role="img" className="_SVG_15ihc_1" tabIndex="0">
                                    <title>No change</title>
                                    <rect width="29" height="24" fill="#f6f6f7" rx="12"></rect>
                                    <path d="M0.519531 1.79395H12.0039V0.249023H0.519531V1.79395Z" fill="#8c9196"
                                        transform="translate(8.5, 11)"></path>
                                </svg>
                            )}
                            {!!totalDiff && totalDiff < 0 && (
                                <div className="badge" style={{ color: '#eb4c5e' }}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3L9 9L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 9L3.1875 3.1875" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                    <span>
                                        {Math.abs(totalDiff).toFixed(2)}%
                                    </span>
                                </div>
                            )}
                            {!!totalDiff && totalDiff > 0 && (
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
            <div className="Polaris-LegacyStack__Item_yiyol">
                <h3 className="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann">Conversion funnel
                </h3>
            </div>
            <div className="Polaris-LegacyStack__Item_yiyol">
                <table className="bsaOo">
                    {items.map((item) => <TbRow {...item} key={item.id} />)}
                </table>
            </div>
        </div>
    );
};