import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import randomInt from '../app/features/randomInt';
import SimpleTableComponent from '../components/SimpleTableComponent';

export default function TopLandingsBySessionsBlock() {
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
            title: '/uk/products/%d0%bf%d0%be%d0%b2%d0%b5%d1%80%d0%b1%d0%b0%d0%bd%d0%ba-%d0%bd%d0%be%d0%b2%d0%be%d0%b3%d0%be-%d0%bf%d0%be%d0%ba%d0%be%d0%bb%d1%96%d0%bd%d0%bd%d1%8f-2022-powerbank-baseus-bipow-20w-30000',
            count: randomInt(50, 9999),
        },
        {
            id: 2,
            title: '/products/%d0%bf%d0%be%d0%b2%d0%b5%d1%80%d0%b1%d0%b0%d0%bd%d0%ba-%d0%bd%d0%be%d0%b2%d0%be%d0%b3%d0%be-%d0%bf%d0%be%d0%ba%d0%be%d0%bb%d1%96%d0%bd%d0%bd%d1%8f-2022-powerbank-baseus-bipow-20w-30000',
            count: randomInt(50, 9999),
        },
    ];

    if (compAlias !== 'noComparison') {
        items.forEach(item => {
            const prev = randomInt(50, 9999);
            item.diff = (item.count - prev) / (item.count / 100);
        });
    }

    return (
        <SimpleTableComponent
            items={items}
            isLoading={dataFetching}
            renderTitle={(item) => (
                <a href={'https://' + item} className="Polaris-Link_yj5sy">{item}</a>
            )}
        />
    );
};