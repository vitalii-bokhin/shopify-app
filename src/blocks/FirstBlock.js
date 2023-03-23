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
    let totalDiff = null;
    let totalTableDiff = null;
    let totalFormat = '';
    let totalTableFormat = null;
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

    return props.children({
        isLoading: isLoading,
        total: totalFormat,
        totalPrefix: titles.currency,
        totalDiff: totalDiff,
        totalTableTitle: titles.table,
        totalTable: totalTableFormat,
        totalTablePrefix: titles.currency,
        totalTableDiff: totalTableDiff,
        chartTitle: titles.chart,
        chartData: resultData,
        chartComparisonData: compareResultData,
        mainPeriod: mainPeriod,
        comparisonPeriod: comparativePeriod,
        type: props.type,
    });
}

export default FirstBlock;