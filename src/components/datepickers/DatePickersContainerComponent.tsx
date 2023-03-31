import { useDispatch, useSelector } from 'react-redux';
import { datepickerActions, today, yesterday } from '../../app/features/datepickerSlice';
import formatDateToYearMonthDayDateString from '../../app/features/formatDateToYearMonthDayDateString';
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
    let months: number[] = [];

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

const comparePrevPeriod = (date: DateRange) => {
    const dFrom = new Date(date.period.from);
    const dTo = new Date(date.period.to);

    switch (date.alias) {
        case 'today':
            return {
                btnTitle: 'Compare: Yesterday',
                from: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                ),
            };

        case 'yesterday':
            return {
                btnTitle: 'Compare: Previous period',
                from: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                ),
            };

        case 'last7days':
            return {
                btnTitle: 'Compare: Previous period',
                from: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 7).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                ),
            };

        case 'last30days':
            return {
                btnTitle: 'Compare: Previous period',
                from: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 30).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                ),
            };

        case 'last90days':
            return {
                btnTitle: 'Compare: Previous period',
                from: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 90).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                ),
            };

        case 'lastMonth':
            return {
                btnTitle: 'Compare: Previous period',
                from: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth() - 1, 1).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth(), 0).setHours(0, 0, 0, 0)
                ),
            };

        case 'lastYear':
            return {
                btnTitle: 'Compare: Previous period',
                from: new Date(
                    new Date(dFrom.getFullYear() - 1, 0, 1).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dFrom.getFullYear(), 0, 0).setHours(0, 0, 0, 0)
                ),
            };

        case 'weekToDate':
            return {
                btnTitle: 'Compare: Previous period',
                from: new Date((() => {
                    const date = new Date(dTo.getFullYear(), dTo.getMonth(), dTo.getDate() - 7);
                    const day = date.getDay();
                    const diff = date.getDate() - day + (day == 0 ? -6 : 1);
                    return new Date(date.getFullYear(), date.getMonth(), diff).setHours(0, 0, 0, 0);
                })()),
                to: new Date(
                    new Date(dTo.getFullYear(), dTo.getMonth(), dTo.getDate() - 7).setHours(0, 0, 0, 0)
                ),
            };

        case 'monthToDate':
            return {
                btnTitle: 'Compare: Previous period',
                from: new Date(
                    new Date(dTo.getFullYear(), dTo.getMonth() - 1, 1).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dTo.getFullYear(), dTo.getMonth() - 1, dTo.getDate()).setHours(0, 0, 0, 0)
                ),
            };

        case 'quarterToDate':
            return {
                btnTitle: 'Compare: Previous period',
                from: new Date(
                    new Date(dFrom.getFullYear(), dFrom.getMonth() - 3, 1).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dTo.getFullYear(), dTo.getMonth() - 3, dTo.getDate()).setHours(0, 0, 0, 0)
                ),
            };

        case 'yearToDate':
            return {
                btnTitle: 'Compare: Previous period',
                from: new Date(
                    new Date(dFrom.getFullYear() - 1, 0, 1).setHours(0, 0, 0, 0)
                ),
                to: new Date(
                    new Date(dTo.getFullYear() - 1, dTo.getMonth(), dTo.getDate()).setHours(0, 0, 0, 0)
                ),
            };

        case 'custom':
            if (date.period.from === date.period.to) {
                return {
                    btnTitle: 'Compare: Previous period',
                    from: new Date(
                        new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                    ),
                    to: new Date(
                        new Date(dTo.getFullYear(), dTo.getMonth(), dTo.getDate() - 1).setHours(0, 0, 0, 0)
                    ),
                };

            } else {
                const diff = dFrom.getTime() - (dTo.getTime() - dFrom.getTime());

                return {
                    btnTitle: 'Compare: Previous period',
                    from: new Date(
                        new Date(diff).setHours(0, 0, 0, 0)
                    ),
                    to: new Date(
                        new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                    ),
                };
            }
    }

    if (date.alias.includes('Quarter')) {
        const char = date.alias[0];
        const lastYear = dTo.getFullYear() - 1;
        let months: number[] = [];

        switch (char) {
            case '4':
                months = [9, 11];
                break;

            case '3':
                months = [6, 8];
                break;

            case '2':
                months = [3, 5];
                break;

            case '1':
                months = [0, 2];
                break;
        }

        const start = new Date(lastYear, months[0], 1).setHours(0, 0, 0, 0);
        const end = new Date(lastYear, months[1] + 1, 0).setHours(0, 0, 0, 0);

        return {
            btnTitle: 'Compare: Previous period',
            from: new Date(start),
            to: new Date(end),
        };
    }

    if (date.alias.includes('BFCM')) {
        const diff = dTo.getDate() - dFrom.getDate();

        return {
            btnTitle: 'Compare: Previous period',
            from: new Date(
                new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1 - diff).setHours(0, 0, 0, 0)
            ),
            to: new Date(
                new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
            ),
        };
    }
}

const comparePrevYear = (date: DateRange) => {
    const dFrom = new Date(date.period.from);
    const dTo = new Date(date.period.to);

    return {
        btnTitle: 'Compare: Previous year',
        from: new Date(
            new Date(dFrom.getFullYear() - 1, dFrom.getMonth(), dFrom.getDate()).setHours(0, 0, 0, 0)
        ),
        to: new Date(
            new Date(dTo.getFullYear() - 1, dTo.getMonth(), dTo.getDate()).setHours(0, 0, 0, 0)
        ),
    };
}

export default function DatePickersContainerComponent() {
    const activeMainRange: DateRange = useSelector<any, any>((state) => state.datepicker.mainRange);
    const activeComparativeRange: DateRange = useSelector<any, any>((state) => state.datepicker.comparativeRange);
    const dispatch = useDispatch();

    const setComparison = (rangeState: DateRange, mainRange: DateRange) => {
        if (!mainRange) {
            mainRange = activeMainRange;
        }

        const range = JSON.parse(JSON.stringify(rangeState));

        range.period.from = formatDateToYearMonthDayDateString(new Date(rangeState.period.from));
        range.period.to = formatDateToYearMonthDayDateString(new Date(rangeState.period.to));

        if (rangeState.alias !== 'noComparison') {
            range.title = rangeState.period?.btnTitle || rangeState.title;
        }

        dispatch(datepickerActions.setComparativeRange(range));
    }

    const setRange = (rangeState: DateRange) => {
        const range = JSON.parse(JSON.stringify(rangeState));

        range.period.from = formatDateToYearMonthDayDateString(new Date(rangeState.period.from));
        range.period.to = formatDateToYearMonthDayDateString(new Date(rangeState.period.to));

        dispatch(datepickerActions.setMainRange(range));

        if (activeComparativeRange.alias !== 'noComparison') {
            const compRange = JSON.parse(JSON.stringify(activeComparativeRange));

            compRange.period = comparePrevPeriod(range);

            setComparison(compRange, range);
        }
    }

    comparativeRanges.forEach((range, i) => {
        let period;

        if (range.alias === 'previousPeriod') {
            period = comparePrevPeriod(activeMainRange);
        } else if (range.alias === 'previousYear') {
            period = comparePrevYear(activeMainRange);
        }

        if (period) {
            const formatPeriod = {
                from: formatDateToYearMonthDayDateString(period.from),
                to: formatDateToYearMonthDayDateString(period.to),
                btnTitle: period.btnTitle,
            };

            comparativeRanges[i].period = formatPeriod;
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
                    setActiveRange={setRange}
                />
            </div>
            <div className="WdJCM">
                <DateRangePicker
                    ranges={comparativeRanges}
                    quartersRanges={quartersRanges}
                    blackFridayRanges={blackFridayRanges}
                    activeRange={activeComparativeRange}
                    setActiveRange={setComparison}
                    type="comparison"
                />
            </div>
        </div>
    );
};
