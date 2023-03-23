import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import formatDateToString from '../app/features/formatDateToString';
import { useGetDataQuery } from '../app/services/userApi';

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
                    value: item.sales,
                    ...item,
                };
            });
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
                    value: item.sales,
                    ...item,
                };
            });
    }

    let total = 0;
    let compareTotal = 0;
    let totalDiff = null;
    let totalTableDiff = null;
    let totalTable = '';
    let compareTotalTable = '';

    total = resultData.reduce((acc, item) => acc + item.sales, 0);
    totalTable = total;
    compareTotal = compareResultData.reduce((acc, item) => acc + item.sales, 0);
    compareTotalTable = compareTotal;

    if (compareTotal && total) {
        totalDiff = (total - compareTotal) / (total / 100);
    }

    if (compareTotalTable && totalTable) {
        totalTableDiff = (totalTable - compareTotalTable) / (totalTable / 100);
    }

    return props.children({
        isLoading: isLoading,
        total: total.toFixed(2),
        totalPrefix: '$',
        totalDiff: totalDiff,
        totalTableTitle: 'Online Store',
        totalTable: total.toFixed(2),
        totalTablePrefix: '$',
        totalTableDiff: totalTableDiff,
        chartTitle: 'Sales over time',
        chartData: resultData,
        chartComparisonData: compareResultData,
        mainPeriod: mainPeriod,
        comparisonPeriod: comparativePeriod,
        chartPrefix: '$',
    });
}

export default FirstBlock;