import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import formatDateToString from '../app/features/formatDateToString';
import { useGetDataQuery } from '../app/services/userApi';

export default function ThirdBlock(props) {
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
                    value: item.sessions,
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
                    value: item.sessions,
                    ...item,
                };
            });
    }

    let total = resultData.reduce((acc, item) => acc + item.return_customer_rate, 0);
    let totalFormat = (total / resultData.length).toFixed(2) + '%';

    let compareTotal = compareResultData.reduce((acc, item) => acc + item.return_customer_rate, 0);
    compareTotal = compareTotal / compareResultData.length;

    let totalDiff = null;

    if (compareTotal && total) {
        totalDiff = (total - compareTotal) / (total / 100);
    }

    return props.children({
        isLoading: isLoading,
        total: totalFormat,
        totalPrefix: '',
        totalDiff: totalDiff,
        totalTableTitle: '',
        totalTable: '',
        totalTablePrefix: '',
        totalTableDiff: '',
        chartTitle: 'Customers Over Time',
        chartData: resultData,
        chartComparisonData: compareResultData,
        mainPeriod: mainPeriod,
        comparisonPeriod: comparativePeriod,
        chartPrefix: '',
    });
}