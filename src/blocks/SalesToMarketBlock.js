import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import distributeForDay from '../app/features/distributeForDay';
import formatDateToString from '../app/features/formatDateToString';
import formatDateToTimeString from '../app/features/formatDateToTimeString';
import { useGetDataQuery } from '../app/services/userApi';
import ChartBlockComponent from '../components/ChartBlockComponent';

export default function SalesToMarketBlock() {
    const { alias: mainPeriodAlias, period: mainPeriod } = useSelector((state) => state.datepicker.mainRange);
    const comparativePeriod = useSelector((state) => state.datepicker.comparativeRange.period);
    const { data, isLoading } = useGetDataQuery();
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
            })
            .map((item) => {
                return {
                    key: formatDateToString(new Date(item.date).setHours(0, 0, 0, 0)),
                    value: item.sales_to_market,
                    ...item,
                };
            });

        if (mainPeriodAlias === 'today' || mainPeriodAlias === 'yesterday') {
            const dayItem = resultData[0];

            if (dayItem) {
                const valuesByHours = distributeForDay(mainPeriodAlias, dayItem.sales_to_market, (val) => Math.round(val));
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

    if (comparativePeriod.from && comparativePeriod.to && data) {
        compareResultData = data
            .filter((item) => {
                const itemDate = new Date(item.date).setHours(0, 0, 0, 0);
                const dateFrom = new Date(comparativePeriod.from).setHours(0, 0, 0, 0);
                const dateTo = new Date(comparativePeriod.to).setHours(0, 0, 0, 0);

                return dateFrom <= itemDate && itemDate <= dateTo;
            })
            .map((item) => {
                return {
                    key: formatDateToString(new Date(item.date).setHours(0, 0, 0, 0)),
                    value: item.sales_to_market,
                    ...item,
                };
            });

        if (mainPeriodAlias === 'today' || mainPeriodAlias === 'yesterday') {
            const dayItem = compareResultData[0];

            if (dayItem) {
                const valuesByHours = distributeForDay(mainPeriodAlias + '2', dayItem.sales_to_market, (val) => Math.round(val));
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

    if (mainPeriodAlias === 'today' || mainPeriodAlias === 'yesterday') {
        total = resultData[0]?.sales_to_market;
        compareTotal = compareResultData[0]?.sales_to_market;
    } else {
        total = resultData.reduce((acc, item) => acc + item.sales_to_market, 0);
        compareTotal = compareResultData.reduce((acc, item) => acc + item.sales_to_market, 0);
    }

    if (compareTotal && total) {
        totalDiff = (total - compareTotal) / (total / 100);
    }

    const resProps = {
        isLoading: isLoading || dataFetching,
        total: total,
        totalPrefix: '$',
        totalDiff: totalDiff,
        totalTableTitle: '',
        totalTable: '',
        totalTablePrefix: '',
        totalTableDiff: '',
        chartTitle: 'Total sales over time',
        chartData: resultData,
        chartComparisonData: compareResultData,
        mainPeriod: mainPeriod,
        comparisonPeriod: comparativePeriod,
        chartPrefix: '$',
    };

    return <ChartBlockComponent {...resProps} />;
};
