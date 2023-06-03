import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getFilter from 'src/app/features/getFilter';
import distributeForDay from '../app/features/distributeForDay';
import formatDateToString from '../app/features/formatDateToString';
import formatDateToTimeString from '../app/features/formatDateToTimeString';
import ChartBlockComponent from '../components/charts/ChartBlockComponent';

export default function ReturningCustomerBlock(props) {
    const { data, isLoading } = props;
    const { alias: mainPeriodAlias, period: mainPeriod } = useSelector((state) => state.datepicker.mainRange);
    const comparativePeriod = useSelector((state) => state.datepicker.comparativeRange.period);
    const [dataFetching, dataFetchingState] = useState(true);
    const isOneDay = mainPeriodAlias === 'today' || mainPeriodAlias === 'yesterday' || (mainPeriodAlias === 'custom' && mainPeriod.from === mainPeriod.to);

    useEffect(() => {
        dataFetchingState(true);
        setTimeout(() => {
            dataFetchingState(false);
        }, 2000);
    }, [mainPeriod, comparativePeriod]);

    // filter
    let { resultData, compareResultData } = getFilter({ data, mainPeriod, comparativePeriod, fieldToValue: 'first_time' });

    let resultSecondData = [];

    if (resultData.length) {
        if (isOneDay) {
            const dayItem = resultData[0];

            if (dayItem) {
                const valuesByHours = distributeForDay(mainPeriodAlias, dayItem.first_time, (val) => Math.round(val));
                let date = new Date(dayItem.date);

                resultData = [];

                delete dayItem.key;
                delete dayItem.value;

                valuesByHours.forEach((val, i) => {
                    const clonedDayItem = JSON.parse(JSON.stringify(dayItem));

                    date.setHours(i, 0, 0, 0);

                    clonedDayItem.key = formatDateToString(date, { month: 'short', day: 'numeric' }) + ', ' + formatDateToTimeString(date);

                    clonedDayItem.value = val;

                    resultData.push(clonedDayItem);
                });
            }
        }

        resultSecondData = data
            .filter((item) => {
                const itemDate = new Date(item.date).setHours(0, 0, 0, 0);
                const dateFrom = new Date(mainPeriod.from).setHours(0, 0, 0, 0);
                const dateTo = new Date(mainPeriod.to).setHours(0, 0, 0, 0);

                return dateFrom <= itemDate && itemDate <= dateTo;
            })
            .map((item) => {
                return {
                    key: formatDateToString(new Date(item.date).setHours(0, 0, 0, 0)),
                    value: Math.round((item.first_time / 100) * item.return_customer_rate),
                    ...item,
                };
            });

        if (isOneDay) {
            const dayItem = resultSecondData[0];

            if (dayItem) {
                const valuesByHours = distributeForDay(mainPeriodAlias + '2', dayItem.first_time, (val) => Math.round(val));
                let date = new Date(dayItem.date);

                resultSecondData = [];

                delete dayItem.key;
                delete dayItem.value;

                valuesByHours.forEach((val, i) => {
                    const clonedDayItem = JSON.parse(JSON.stringify(dayItem));

                    date.setHours(i, 0, 0, 0);

                    clonedDayItem.key = formatDateToString(date, { month: 'short', day: 'numeric' }) + ', ' + formatDateToTimeString(date);

                    clonedDayItem.value = val;

                    resultSecondData.push(clonedDayItem);
                });
            }
        }
    }

    let total = resultData.reduce((acc, item) => acc + item.return_customer_rate, 0);
    let totalFormat = (total === 0 ? 0 : (total / resultData.length).toFixed(2)) + '%';

    let compareTotal = compareResultData.reduce((acc, item) => acc + item.return_customer_rate, 0);
    compareTotal = compareTotal / compareResultData.length;

    let totalDiff = null;

    if (compareTotal && total) {
        totalDiff = (total - compareTotal) / (total / 100);
    }

    const resProps = {
        isLoading: isLoading || dataFetching,
        total: totalFormat,
        totalPrefix: '',
        totalDiff: totalDiff,
        totalTableTitle: '',
        totalTable: '',
        totalTablePrefix: '',
        totalTableDiff: '',
        chartTitle: 'Customers Over Time',
        mainPeriod: mainPeriod,
        comparisonPeriod: comparativePeriod,
        chartPrefix: '',
        firstChartData: resultData,
        secondChartData: resultSecondData,
        type: props.type,
    };

    return <ChartBlockComponent {...resProps} />;
}