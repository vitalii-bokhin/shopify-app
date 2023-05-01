import formatDateToString from './formatDateToString';

export default function groupChartByMonth(chartData) {
    const dataGroup = new Map();

    chartData.forEach((item) => {
        const date = item.date.split('-');
        const yM = date[0] + '_' + date[1];

        if (!dataGroup.has(yM)) {
            dataGroup.set(yM, {
                value: 0,
                key: formatDateToString(date, { month: 'short', year: 'numeric' }),
            });
        }

        dataGroup.get(yM).value += item.value;
    });

    return dataGroup;
}
