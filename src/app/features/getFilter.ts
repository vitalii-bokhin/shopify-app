import formatDateToString from './formatDateToString';

type Props = {
    data: DateItem[];
    mainPeriod: {
        from: string;
        to: string;
    };
    comparativePeriod: {
        from: string;
        to: string;
    };
    fieldToValue?: keyof DateItem;
    getValue?: (item: DateItem) => any;
};

export default function getFilter(props: Props) {
    const { data, mainPeriod, comparativePeriod, fieldToValue, getValue } = props;
    let resultData: DateItem[] = [];
    let compareResultData: DateItem[] = [];

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
                    value: getValue ? getValue(item) : item[fieldToValue],
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
                    value: getValue ? getValue(item) : item[fieldToValue],
                    ...item,
                };
            });
    }

    return { resultData, compareResultData };
};
