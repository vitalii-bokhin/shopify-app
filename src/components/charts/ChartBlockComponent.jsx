import differenceInDays from 'src/app/features/differenceInDays';
import Loader from '../Loader';
import LineChartComponent from './LineChartComponent';
import StackedChartComponent from './StackedChartComponent';
import groupChartByMonth from 'src/app/features/groupChartByMonth';

export default function ChartBlockComponent(props) {
    let total = props.total === 0 ? 0 : props.total?.toLocaleString('en-US');
    let totalPrefix = props.totalPrefix;
    let chartData = props.chartData ? [...props.chartData] : [];
    let chartComparisonData = props.chartComparisonData ? [...props.chartComparisonData] : [];
    let firstChartData = props.firstChartData ? [...props.firstChartData] : [];
    let secondChartData = props.secondChartData ? [...props.secondChartData] : [];

    if (props.totalPrefix === '$') {
        totalPrefix = '';
        total = props.total
            ? Number(props.total).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
            : '$0.00';
    }

    // transform data to month period
    const diffPeriodInDays = differenceInDays(props.mainPeriod.from, props.mainPeriod.to);

    if (diffPeriodInDays >= 98) { // if diff in 14 weeks
        if (props.type === 'return_customer_rate') {
            const firstChartDataGroup = groupChartByMonth(firstChartData);
            firstChartData = [];

            for (const valItem of firstChartDataGroup.values()) {
                firstChartData.push(valItem);
            }

            const secondChartDataGroup = groupChartByMonth(secondChartData);
            secondChartData = [];

            for (const valItem of secondChartDataGroup.values()) {
                secondChartData.push(valItem);
            }

        } else {
            const dataGroup = groupChartByMonth(chartData);
            chartData = [];

            for (const valItem of dataGroup.values()) {
                chartData.push(valItem);
            }

            const chartComparisonDataGroup = groupChartByMonth(chartComparisonData);
            chartComparisonData = [];

            for (const valItem of chartComparisonDataGroup.values()) {
                chartComparisonData.push(valItem);
            }
        }
    }

    return props.isLoading ? <Loader /> : (
        <div className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--vertical_uiuuj">
            <div className="Polaris-LegacyStack__Item_yiyol">
                <div className="fZGUC">
                    <div className="Polaris-LegacyStack_eaeo0 Polaris-LegacyStack--alignmentCenter_1rtaw">
                        <div className="Polaris-LegacyStack__Item_yiyol Polaris-LegacyStack__Item--fill_vpuzt">
                            <p className="Polaris-Text--root_yj4ah Polaris-Text--headingXl_1dele">
                                {totalPrefix}{total}
                            </p>
                        </div>
                        <div className="Polaris-LegacyStack__Item_yiyol">
                            {props.totalDiff === 0 && (
                                <svg viewBox="0 0 29 24" height="24"
                                    width="29" role="img" className="_SVG_15ihc_1" tabIndex="0">
                                    <title>No change</title>
                                    <rect width="29" height="24" fill="#f6f6f7" rx="12"></rect>
                                    <path d="M0.519531 1.79395H12.0039V0.249023H0.519531V1.79395Z" fill="#8c9196"
                                        transform="translate(8.5, 11)"></path>
                                </svg>
                            )}
                            {!!props.totalDiff && props.totalDiff < 0 && (
                                <div className="badge" style={{ color: '#eb4c5e' }}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3L9 9L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 9L3.1875 3.1875" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                    <span>
                                        {Math.abs(props.totalDiff).toFixed(2)}%
                                    </span>
                                </div>
                            )}
                            {!!props.totalDiff && props.totalDiff > 0 && (
                                <div className="badge" style={{ color: '#119d7f' }}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H9V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 3L3.1875 8.8125" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                    <span>
                                        {Math.abs(props.totalDiff).toFixed(2)}%
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {!!props.totalTable && (
                <div className="Polaris-LegacyStack__Item_yiyol">
                    <table className="bsaOo">
                        <tbody>
                            <tr className="smW4Q">
                                <td className="R6ls0" colSpan="2">{props.totalTableTitle}</td>
                                <td className="R6ls0 Ay5iz QcJza" colSpan="2">
                                    {props.totalTablePrefix}{props.totalTable.toLocaleString('en-US')}
                                </td>
                                {props.totalTableDiff === 0 && (
                                    <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                                        <div className="wqc8b">
                                            <svg viewBox="0 0 29 16" height="16" width="29" role="img" className="_SVG_15ihc_1" tabIndex="0">
                                                <title>No change</title>
                                                <rect width="29" height="16" fill="#f6f6f7" rx="8"></rect>
                                                <path d="M0.519531 1.79395H12.0039V0.249023H0.519531V1.79395Z" fill="#8c9196" transform="translate(8.5, 7)"></path>
                                            </svg>
                                        </div>
                                    </td>
                                )}
                                {!!props.totalTableDiff && props.totalTableDiff < 0 && (
                                    <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                                        <div className="badge badge_sm" style={{ color: '#eb4c5e' }}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3L9 9L3 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 9L3.1875 3.1875" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                            <span>
                                                {Math.abs(props.totalTableDiff).toFixed(2)}%
                                            </span>
                                        </div>
                                    </td>
                                )}
                                {!!props.totalTableDiff && props.totalTableDiff > 0 && (
                                    <td className="R6ls0 Ay5iz BLABy" colSpan="2">
                                        <div className="badge badge_sm" style={{ color: '#119d7f' }}>
                                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 3H9V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 3L3.1875 8.8125" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                                            <span>
                                                {Math.abs(props.totalTableDiff).toFixed(2)}%
                                            </span>
                                        </div>
                                    </td>
                                )}
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}

            <div className="Polaris-LegacyStack__Item_yiyol">
                <div><button aria-describedby="DefinitionPopoverContent1" type="button" className="krQ22"
                    tabIndex="0" aria-controls="Polarispopover21" aria-owns="Polarispopover21"
                    aria-expanded="false">
                    <h3 className="Polaris-Text--root_yj4ah Polaris-Text--headingXs_9lann"><span
                        className="vrNiM">{props.chartTitle}</span></h3>
                </button></div>
            </div>
            <div className="Polaris-LegacyStack__Item_yiyol">
                {props.type === 'return_customer_rate' && (
                    <StackedChartComponent
                        firstData={firstChartData}
                        secondData={secondChartData}
                        prefix={props.chartPrefix}
                        period={props.mainPeriod}
                    />
                )}
                {props.type !== 'return_customer_rate' && (
                    <LineChartComponent
                        data={chartData}
                        compareData={chartComparisonData}
                        period={props.mainPeriod}
                        comparePeriod={props.comparisonPeriod}
                        prefix={props.chartPrefix}
                    />
                )}
            </div>
        </div>
    );
};
