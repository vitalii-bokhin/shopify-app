import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import randomInt from '../app/features/randomInt';
import SimpleTableComponent from '../components/SimpleTableComponent';

export default function SalesBySocialBlock() {
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

    let items = [
        {
            id: 1,
            title: 'Facebook',
            count: randomInt(55000, 999999) / 100,
        },
        {
            id: 2,
            title: 'Tiktok',
            count: randomInt(55000, 999999) / 100,
        },
    ];

    if (compAlias !== 'noComparison') {
        items.forEach(item => {
            const prev = randomInt(55000, 999999) / 100;
            item.diff = (item.count - prev) / (item.count / 100);
        });
    }

    return <SimpleTableComponent items={items} prefix="$" isLoading={dataFetching} />;
};