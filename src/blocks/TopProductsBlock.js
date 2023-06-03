import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getFilter from 'src/app/features/getFilter';
import SimpleTableComponent from '../components/SimpleTableComponent';

export default function TopProductsBlock({ data, isLoading }) {
    const mainPeriod = useSelector((state) => state.datepicker.mainRange.period);
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

    let total = 0;
    let compareTotal = 0;
    let totalDiff = null;

    total = resultData.reduce((acc, item) => acc + item.orders, 0);
    compareTotal = compareResultData.reduce((acc, item) => acc + item.orders, 0);

    if (compareTotal && total) {
        totalDiff = (total - compareTotal) / (total / 100);
    }

    const items = [
        {
            id: 1,
            title: 'Micro Toner',
            count: total,
            diff: totalDiff,
        },
    ];

    return <SimpleTableComponent items={items} isLoading={dataFetching || isLoading} />;
};