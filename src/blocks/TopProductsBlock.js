import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import randomInt from '../app/features/randomInt';
import SimpleTableComponent from '../components/SimpleTableComponent';

export default function TopProductsBlock() {
    const mainPeriod = useSelector((state) => state.datepicker.mainRange.period);
    const comparativePeriod = useSelector((state) => state.datepicker.comparativeRange.period);
    const compAlias = useSelector((state) => state.datepicker.comparativeRange.alias);
    const [dataFetching, dataFetchingState] = useState(true);

    useEffect(() => {
        dataFetchingState(true);
        setTimeout(() => {
            dataFetchingState(false);
        }, 2000);
    }, [mainPeriod, comparativePeriod]);

    const items = [
        {
            id: 1,
            title: 'Micro Toner',
            count: randomInt(50, 9999),
        },
    ];

    if (compAlias !== 'noComparison') {
        items.forEach(item => {
            const prev = randomInt(50, 9999);
            item.diff = (item.count - prev) / (item.count / 100);
        });
    }

    return <SimpleTableComponent items={items} isLoading={dataFetching} />;
};