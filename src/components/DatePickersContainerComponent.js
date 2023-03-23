import { useDispatch, useSelector } from 'react-redux';
import { datepickerActions, today, yesterday } from '../app/features/datepickerSlice';
import formatDateToYearMonthDayDateString from '../app/features/formatDateToYearMonthDayDateString';
import DateRangePicker from './DateRangePicker';

const mainRanges = [
    {
        title: 'Today',
        alias: 'today',
        period: {
            from: today,
            to: today,
        },
    },
    {
        title: 'Yesterday',
        alias: 'yesterday',
        period: {
            from: yesterday,
            to: yesterday,
        },
    },
    {
        title: 'Last 7 days',
        alias: 'last7days',
        period: {
            from: new Date(
                new Date(new Date().setDate(today.getDate() - 7)).setHours(0, 0, 0, 0)
            ),
            to: yesterday,
        },
    },
    {
        title: 'Last 30 days',
        alias: 'last30days',
        period: {
            from: new Date(
                new Date(new Date().setDate(today.getDate() - 30)).setHours(0, 0, 0, 0)
            ),
            to: yesterday,
        },
    },
    {
        title: 'Last 90 days',
        alias: 'last90days',
        period: {
            from: new Date(
                new Date(new Date().setDate(today.getDate() - 90)).setHours(0, 0, 0, 0)
            ),
            to: yesterday,
        },
    },
    {
        title: 'Last month',
        alias: 'lastMonth',
        period: {
            from: new Date(
                new Date(today.getFullYear(), today.getMonth() - 1, 1).setHours(0, 0, 0, 0)
            ),
            to: new Date(
                new Date(today.getFullYear(), today.getMonth(), 0).setHours(0, 0, 0, 0)
            ),
        },
    },
    {
        title: 'Last year',
        alias: 'lastYear',
        period: {
            from: new Date(
                new Date(today.getFullYear() - 1, 0, 1).setHours(0, 0, 0, 0)
            ),
            to: new Date(
                new Date(today.getFullYear(), 0, 0).setHours(0, 0, 0, 0)
            ),
        },
    },
    {
        title: 'Week to date',
        alias: 'weekToDate',
        period: {
            from: new Date((() => {
                const day = today.getDay();
                const diff = today.getDate() - day + (day == 0 ? -6 : 1);
                return new Date(today.getFullYear(), today.getMonth(), diff).setHours(0, 0, 0, 0);
            })()),
            to: today,
        },
    },
    {
        title: 'Month to date',
        alias: 'monthToDate',
        period: {
            from: new Date(
                new Date(today.getFullYear(), today.getMonth(), 1).setHours(0, 0, 0, 0)
            ),
            to: today,
        },
    },
    {
        title: 'Quarter to date',
        alias: 'quarterToDate',
        period: {
            from: new Date(
                new Date(today.getFullYear(), today.getMonth() - 2, 1).setHours(0, 0, 0, 0)
            ),
            to: today,
        },
    },
    {
        title: 'Year to date',
        alias: 'yearToDate',
        period: {
            from: new Date(
                new Date(today.getFullYear(), 0, 1).setHours(0, 0, 0, 0)
            ),
            to: today,
        },
    },
];

const comparativeRanges = [
    {
        title: 'No comparison',
        alias: 'noComparison',
        period: {
            from: '',
            to: '',
        },
    },
    {
        title: 'Previous period',
        alias: 'previousPeriod',
        period: {
            from: '',
            to: '',
        },
    },
    {
        title: 'Previous year',
        alias: 'previousYear',
        period: {
            from: '',
            to: '',
        },
    },
];

const quartersRanges = ['4th', '3rd', '2nd', '1st'].map((item, i) => {
    const lastYear = today.getFullYear() - 1;
    let months = [];

    switch (i) {
        case 0:
            months = [9, 11];
            break;

        case 1:
            months = [6, 8];
            break;

        case 2:
            months = [3, 5];
            break;

        case 3:
            months = [0, 2];
            break;
    }

    const start = new Date(lastYear, months[0], 1).setHours(0, 0, 0, 0);
    const end = new Date(lastYear, months[1] + 1, 0).setHours(0, 0, 0, 0);

    return {
        title: item + ' Quarter (' + lastYear + ')',
        alias: item + 'Quarter' + lastYear,
        period: {
            from: new Date(start),
            to: new Date(end),
        },
    };
});

const blackFridayRanges = [2022, 2021, 2020, 2019].map((year) => {
    let start, end;

    switch (year) {
        case 2022:
            start = new Date(year, 10, 25);
            end = new Date(year, 10, 28);
            break;

        case 2021:
            start = new Date(year, 10, 26);
            end = new Date(year, 10, 29);
            break;

        case 2020:
            start = new Date(year, 10, 27);
            end = new Date(year, 10, 30);
            break;

        case 2019:
            start = new Date(year, 10, 29);
            end = new Date(year, 11, 2);
            break;
    }

    return {
        title: 'BFCM (' + year + ')',
        alias: 'rangeBFCM' + year,
        period: {
            from: new Date(start.setHours(0, 0, 0, 0)),
            to: new Date(end.setHours(0, 0, 0, 0)),
        },
    };
});

const comparePrevPeriod = (date) => {
    const dFrom = new Date(date.period.from);
    const dTo = new Date(date.period.to);

    switch (date.alias) {
        case 'today':
            return {
                from: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                ),
            };

        case 'last7days':
            return {
                from: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 7).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                ),
            };

        case 'last30days':
            return {
                from: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 30).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                ),
            };

        case 'last90days':
            return {
                from: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 90).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                ),
            };

        case 'lastMonth':
            return {
                from: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth() - 1, 1).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), 0).setHours(0, 0, 0, 0)
                ),
            };
    }
}

export default function DatePickersContainerComponent(props) {
    const activeMainRange = useSelector((state) => state.datepicker.mainRange);
    const activeComparativeRange = useSelector((state) => state.datepicker.comparativeRange);
    const dispatch = useDispatch();

    const setMainRange = (rangeState) => {
        const range = JSON.parse(JSON.stringify(rangeState));

        range.period.from = formatDateToYearMonthDayDateString(new Date(rangeState.period.from));
        range.period.to = formatDateToYearMonthDayDateString(new Date(rangeState.period.to));

        dispatch(datepickerActions.setMainRange(range));
    }

    const setComparativeRange = (rangeState) => {
        const range = JSON.parse(JSON.stringify(rangeState));

        range.period.from = formatDateToYearMonthDayDateString(new Date(rangeState.period.from));
        range.period.to = formatDateToYearMonthDayDateString(new Date(rangeState.period.to));

        if (rangeState.alias !== 'noComparison') {
            range.title = 'Compare: ' + rangeState.title;
        }

        dispatch(datepickerActions.setComparativeRange(range));
    }

    comparativeRanges.forEach((range, i) => {
        switch (range.alias) {
            case 'previousPeriod':
                comparativeRanges[i].period = comparePrevPeriod(activeMainRange);
                break;
        }
    });

    return (
        <div className="k5SGA">
            <div className="WdJCM">
                <DateRangePicker
                    ranges={mainRanges}
                    quartersRanges={quartersRanges}
                    blackFridayRanges={blackFridayRanges}
                    activeRange={activeMainRange}
                    setActiveRange={setMainRange}
                />
            </div>
            <div className="WdJCM">
                <DateRangePicker
                    ranges={comparativeRanges}
                    quartersRanges={quartersRanges}
                    blackFridayRanges={blackFridayRanges}
                    activeRange={activeComparativeRange}
                    setActiveRange={setComparativeRange}
                    type="comparison"
                />
            </div>
        </div>
    );
};
