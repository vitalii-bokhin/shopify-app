import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getFilter from 'src/app/features/getFilter';
import distributeForDay from '../app/features/distributeForDay';
import formatDateToString from '../app/features/formatDateToString';
import formatDateToTimeString from '../app/features/formatDateToTimeString';
import ChartBlockComponent from '../components/charts/ChartBlockComponent';

export default function TotalOrdersBlock({ data, isLoading }) {
    const { alias: mainPeriodAlias, period: mainPeriod } = useSelector((state) => state.datepicker.mainRange);
    const comparativePeriod = useSelector((state) => state.datepicker.comparativeRange.period);
    const [dataFetching, dataFetchingState] = useState(true);

    useEffect(() => {
        dataFetchingState(true);
        setTimeout(() => {
            dataFetchingState(false);
        }, 2000);
    }, [mainPeriod, comparativePeriod]);

    // filter
    let { resultData, compareResultData } = getFilter({ data, mainPeriod, comparativePeriod, fieldToValue: 'orders' });

    if (resultData.length) {
        if (
            mainPeriodAlias === 'today'
            || mainPeriodAlias === 'yesterday'
            || (mainPeriodAlias === 'custom' && mainPeriod.from === mainPeriod.to)
        ) {
            const dayItem = resultData[0];

            if (dayItem) {
                const valuesByHours = distributeForDay(mainPeriodAlias, dayItem.orders, (val) => Math.round(val));
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
    }

    if (comparativePeriod.from && comparativePeriod.to && compareResultData.length) {
        if (
            mainPeriodAlias === 'today'
            || mainPeriodAlias === 'yesterday'
            || (mainPeriodAlias === 'custom' && mainPeriod.from === mainPeriod.to)
        ) {
            const dayItem = compareResultData[0];

            if (dayItem) {
                const valuesByHours = distributeForDay(mainPeriodAlias + '2', dayItem.orders, (val) => Math.round(val));
                let date = new Date(dayItem.date);

                compareResultData = [];

                delete dayItem.key;
                delete dayItem.value;

                valuesByHours.forEach((val, i) => {
                    const clonedDayItem = JSON.parse(JSON.stringify(dayItem));

                    date.setHours(i, 0, 0, 0);

                    clonedDayItem.key = formatDateToString(date, { month: 'short', day: 'numeric' }) + ', ' + formatDateToTimeString(date);
                    clonedDayItem.value = val;

                    compareResultData.push(clonedDayItem);
                });
            }
        }
    }

    let total = 0;
    let compareTotal = 0;
    let totalDiff = null;
    let totalTableDiff = null;
    let totalTable = '';
    let compareTotalTable = '';

    if (mainPeriodAlias === 'today' || mainPeriodAlias === 'yesterday') {
        total = resultData[0]?.orders;
        totalTable = total;
        compareTotal = compareResultData[0]?.orders;
        compareTotalTable = compareTotal;
    } else {
        total = resultData.reduce((acc, item) => acc + item.orders, 0);
        totalTable = total;
        compareTotal = compareResultData.reduce((acc, item) => acc + item.orders, 0);
        compareTotalTable = compareTotal;
    }

    if (compareTotal && total) {
        totalDiff = (total - compareTotal) / (total / 100);
    }

    if (compareTotalTable && totalTable) {
        totalTableDiff = (totalTable - compareTotalTable) / (totalTable / 100);
    }

    const resProps = {
        isLoading: isLoading || dataFetching,
        total: total,
        totalPrefix: '',
        totalDiff: totalDiff,
        totalTableTitle: '',
        totalTable: '',
        totalTablePrefix: '',
        totalTableDiff: '',
        chartTitle: 'Orders over time',
        chartData: resultData,
        chartComparisonData: compareResultData,
        mainPeriod: mainPeriod,
        comparisonPeriod: comparativePeriod,
        chartPrefix: '',
    };

    return <ChartBlockComponent {...resProps} />;
};
