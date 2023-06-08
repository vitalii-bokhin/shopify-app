import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getFilter from 'src/app/features/getFilter';
import randomInt from '../app/features/randomInt';
import SimpleTableComponent from './SimpleTableComponent';

export default function SessionsComponent({ data, isLoading, items, renderTitle }) {
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
    let { resultData, compareResultData } = getFilter({ data, mainPeriod, comparativePeriod, fieldToValue: 'sessions' });

    let total = 0;
    let compareTotal = 0;
    let totalDiff = null;

    total = resultData.reduce((acc, item) => acc + item.sessions, 0);
    compareTotal = compareResultData.reduce((acc, item) => acc + item.sessions, 0);

    if (compareTotal && total) {
        totalDiff = (total - compareTotal) / (total / 100);
    }

    let totReduced = 0;
    let diffReduced = 0;

    if (items.length) {
        items.forEach((item, i) => {
            const tot = randomInt(0, Math.abs(total / items.length));
            const diff = randomInt(0, Math.abs(totalDiff / items.length));

            if (i + 1 < items.length) {
                totReduced += tot;
                diffReduced += diff;
            }

            item.count = (total < 0 ? tot * -1 : tot);
            item.diff = totalDiff ? (totalDiff < 0 ? diff * -1 : diff) : null;
        });

        items[items.length - 1].count = total - totReduced;
        items[items.length - 1].diff = totalDiff ? totalDiff - diffReduced : null;

        items.sort((a, b) => b.count - a.count);
    }

    return (
        <SimpleTableComponent
            items={items}
            isLoading={dataFetching || isLoading}
            renderTitle={renderTitle}
        />
    );
}
