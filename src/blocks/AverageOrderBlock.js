import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getFilter from 'src/app/features/getFilter';
import distributeForDay from '../app/features/distributeForDay';
import formatDateToString from '../app/features/formatDateToString';
import formatDateToTimeString from '../app/features/formatDateToTimeString';
import ChartBlockComponent from '../components/charts/ChartBlockComponent';

export default function AverageOrderBlock({ data, isLoading }) {
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
    let { resultData, compareResultData } = getFilter({ data, mainPeriod, comparativePeriod, getValue: (item) => item.orders > 0 ? item.sales / item.orders : 0 });

    if (resultData.length && isOneDay) {
        const dayItem = resultData[0];

        if (dayItem) {
            const valuesByHours = distributeForDay(mainPeriodAlias, (dayItem.orders > 0 ? dayItem.sales / dayItem.orders : 0), (val) => Math.round(val));
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

    if (comparativePeriod.from && comparativePeriod.to && compareResultData.length && isOneDay) {
        const dayItem = compareResultData[0];

        if (dayItem) {
            const valuesByHours = distributeForDay(mainPeriodAlias + '2', (dayItem.orders > 0 ? dayItem.sales / dayItem.orders : 0), (val) => Math.round(val));
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

    let total = 0;
    let compareTotal = 0;
    let totalDiff = null;

    if (isOneDay) {
        if (resultData[0]?.sales && resultData[0]?.orders) {
            total = resultData[0]?.sales / resultData[0]?.orders;
        }

        if (compareResultData[0]?.sales && compareResultData[0]?.orders) {
            compareTotal = compareResultData[0]?.sales / compareResultData[0]?.orders;
        }
    } else {
        total = resultData.reduce((acc, item) => acc + item.value, 0) / resultData.length;
        compareTotal = compareResultData.reduce((acc, item) => acc + item.value, 0) / compareResultData.length;
    }

    if (compareTotal && total) {
        totalDiff = (total - compareTotal) / (total / 100);
    }

    total = total === 0 ? 0 : total.toFixed(2);

    const resProps = {
        isLoading: isLoading || dataFetching,
        total,
        totalPrefix: '$',
        totalDiff: totalDiff,
        totalTableTitle: '',
        totalTable: '',
        totalTablePrefix: '',
        totalTableDiff: '',
        chartTitle: 'Order Value Over Time',
        chartData: resultData,
        chartComparisonData: compareResultData,
        mainPeriod: mainPeriod,
        comparisonPeriod: comparativePeriod,
        chartPrefix: '$',
    };

    return <ChartBlockComponent {...resProps} />;
};
