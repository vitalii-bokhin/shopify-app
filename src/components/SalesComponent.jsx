import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import getFilter from 'src/app/features/getFilter';
import randomInt from '../app/features/randomInt';
import SimpleTableComponent from './SimpleTableComponent';

export default function SalesComponent({ data, isLoading, items, renderTitle, prefix }) {
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

    // filter
    let { resultData, compareResultData } = getFilter({ data, mainPeriod, comparativePeriod, fieldToValue: 'sales' });

    let total = 0;
    let compareTotal = 0;
    let totalDiff = null;

    total = resultData.reduce((acc, item) => acc + item.sales, 0);
    compareTotal = compareResultData.reduce((acc, item) => acc + item.sales, 0);

    if (compareTotal && total) {
        totalDiff = (total - compareTotal) / (total / 100);
    }

    let totReduced = 0;
    let diffReduced = 0;

    if (items.length) {
        const cloned = JSON.parse(JSON.stringify(items));

        cloned.forEach((item, i) => {
            const tot = randomInt(0, Math.abs(total / cloned.length));
            const diff = randomInt(0, Math.abs(totalDiff / cloned.length));

            if (i + 1 < cloned.length) {
                totReduced += tot;
                diffReduced += diff;
            }

            item.count = (total < 0 ? tot * -1 : tot);
            item.diff = totalDiff ? (totalDiff < 0 ? diff * -1 : diff) : null;
        });

        cloned[cloned.length - 1].count = total - totReduced;
        cloned[cloned.length - 1].diff = totalDiff ? totalDiff - diffReduced : null;

        cloned.sort((a, b) => b.count - a.count);

        items.forEach((item, i) => {
            item.count = cloned[i].count;
            item.diff = cloned[i].diff;
        });
    }

    return (
        <SimpleTableComponent
            items={items}
            isLoading={dataFetching || isLoading}
            renderTitle={renderTitle}
            prefix={prefix}
        />
    );
}
