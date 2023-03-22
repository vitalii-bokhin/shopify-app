import { AlphaStack, Box, Button, Collapsible, Columns, DatePicker, Icon, Inline, OptionList, Popover, Scrollable, Select, TextField, useBreakpoints } from '@shopify/polaris';
import { ChevronDownMinor, ChevronUpMinor } from '@shopify/polaris-icons';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatDateToYearMonthDayDateString from '../app/features/formatDateToYearMonthDayDateString';
import { setComparison, setComparisonDate, setDate as setDateStore } from './../app/features/datepickerSlice';

const ShowButton = (props) => {
    return (
        <button onClick={props.onClick} className="Polaris-Button_r99lw Polaris-Button--sizeSlim_1p6ue Polaris-Button--fullWidth_zyvh4"
            type="button" tabIndex="0" aria-controls="Polarispopover130" aria-owns="Polarispopover130"
            aria-expanded="false"><span className="Polaris-Button__Content_xd1mk">

                {props.type !== 'comparison' && (
                    <span className="Polaris-Button__Icon_yj27d">
                        <span className="Polaris-Icon_yj27d">
                            <svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true">
                                <path fillRule="evenodd" d="M7 2a1 1 0 0 1 1 1v1h4v-1a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h1v-1a1 1 0 0 1 1-1Zm-2 6v7h10v-7h-10Z">
                                </path>
                            </svg>
                        </span>
                    </span>
                )}

                <span className="Polaris-Button__Text_yj3uv">{props.text}</span>
            </span>
        </button>
    );
}

const DropDown = (props) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="uBwaV">
            <div className="fD5Ub">
                <button className="CC7jr" type="button" onClick={() => setOpen(!open)}>
                    <span className="BfUwo">{props.button}</span>
                    <Icon
                        source={open ? ChevronUpMinor : ChevronDownMinor}
                        color="base"
                    />
                </button>
            </div>
            <Collapsible
                open={open}
                transition={{ duration: '100ms', timingFunction: 'linear' }}
                expandOnPrint
            >
                {props.children}
            </Collapsible>
        </div>
    );
}

// This example is for guidance purposes. Copying it will come with caveats.
function DateRangePicker(props) {
    const dispatch = useDispatch();
    const date = useSelector((state) => state.datepicker.date);
    const { mdDown, lgUp } = useBreakpoints();
    const shouldShowMultiMonth = lgUp;
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const yesterday = new Date(
        new Date(new Date().setDate(today.getDate() - 1)).setHours(0, 0, 0, 0)
    );
    const comparison = props.type == 'comparison';

    const defRanges = [
        {
            title: "Today",
            alias: "today",
            period: {
                since: today,
                until: today,
            },
        },
        {
            title: "Yesterday",
            alias: "yesterday",
            period: {
                since: yesterday,
                until: yesterday,
            },
        },
        {
            title: "Last 7 days",
            alias: "last7days",
            period: {
                since: new Date(
                    new Date(new Date().setDate(today.getDate() - 7)).setHours(0, 0, 0, 0)
                ),
                until: yesterday,
            },
        },
        {
            title: "Last 30 days",
            alias: "last30days",
            period: {
                since: new Date(
                    new Date(new Date().setDate(today.getDate() - 30)).setHours(0, 0, 0, 0)
                ),
                until: yesterday,
            },
        },
        {
            title: "Last 90 days",
            alias: "last90days",
            period: {
                since: new Date(
                    new Date(new Date().setDate(today.getDate() - 90)).setHours(0, 0, 0, 0)
                ),
                until: yesterday,
            },
        },
        {
            title: "Last month",
            alias: "lastMonth",
            period: {
                since: new Date(
                    new Date(today.getFullYear(), today.getMonth() - 1, 1).setHours(0, 0, 0, 0)
                ),
                until: new Date(
                    new Date(today.getFullYear(), today.getMonth(), 0).setHours(0, 0, 0, 0)
                ),
            },
        },
        {
            title: "Last year",
            alias: "lastYear",
            period: {
                since: new Date(
                    new Date(today.getFullYear() - 1, 0, 1).setHours(0, 0, 0, 0)
                ),
                until: new Date(
                    new Date(today.getFullYear(), 0, 0).setHours(0, 0, 0, 0)
                ),
            },
        },
        {
            title: "Week to date",
            alias: "weekToDate",
            period: {
                since: new Date((() => {
                    const day = today.getDay();
                    const diff = today.getDate() - day + (day == 0 ? -6 : 1);
                    return new Date(today.getFullYear(), today.getMonth(), diff).setHours(0, 0, 0, 0);
                })()),
                until: today,
            },
        },
        {
            title: "Month to date",
            alias: "monthToDate",
            period: {
                since: new Date(
                    new Date(today.getFullYear(), today.getMonth(), 1).setHours(0, 0, 0, 0)
                ),
                until: today,
            },
        },
        {
            title: "Quarter to date",
            alias: "quarterToDate",
            period: {
                since: new Date(
                    new Date(today.getFullYear(), today.getMonth() - 2, 1).setHours(0, 0, 0, 0)
                ),
                until: today,
            },
        },
        {
            title: "Year to date",
            alias: "yearToDate",
            period: {
                since: new Date(
                    new Date(today.getFullYear(), 0, 1).setHours(0, 0, 0, 0)
                ),
                until: today,
            },
        },
    ];

    const comparePrevPeriod = () => {
        const dFrom = new Date(date.from);
        const dTo = new Date(date.from);

        switch (date.alias) {
            case 'today':
                return {
                    since: new Date(
                        new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                    ),
                    until: new Date(
                        new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                    ),
                };

            case 'last7days':
                return {
                    since: new Date(
                        new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 7).setHours(0, 0, 0, 0)
                    ),
                    until: new Date(
                        new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                    ),
                };

            case 'last30days':
                return {
                    since: new Date(
                        new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 30).setHours(0, 0, 0, 0)
                    ),
                    until: new Date(
                        new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                    ),
                };

            case 'last90days':
                return {
                    since: new Date(
                        new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 90).setHours(0, 0, 0, 0)
                    ),
                    until: new Date(
                        new Date(dFrom.getFullYear(), dFrom.getMonth(), dFrom.getDate() - 1).setHours(0, 0, 0, 0)
                    ),
                };

            case 'lastMonth':
                return {
                    since: new Date(
                        new Date(dFrom.getFullYear(), dFrom.getMonth() - 1, 1).setHours(0, 0, 0, 0)
                    ),
                    until: new Date(
                        new Date(dFrom.getFullYear(), dFrom.getMonth(), 0).setHours(0, 0, 0, 0)
                    ),
                };
        }
    }

    const comparisonRanges = [
        {
            title: "No comparison",
            alias: "noComparison",
            period: {
                since: today,
                until: today,
            },
        },
        {
            title: "Previous period",
            alias: "previousPeriod",
            period: comparePrevPeriod(),
        },
        {
            title: "Previous year",
            alias: "previousYear",
            period: comparePrevPeriod(),
        },
    ];

    const ranges = comparison ? comparisonRanges : defRanges;

    const quartersRange = ['4th', '3rd', '2nd', '1st'].map((item, i) => {
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
                since: new Date(start),
                until: new Date(end),
            },
        };
    });

    const blackFridayRange = [2022, 2021, 2020, 2019].map((year) => {
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
                since: new Date(start.setHours(0, 0, 0, 0)),
                until: new Date(end.setHours(0, 0, 0, 0)),
            },
        };
    });

    const [popoverActive, setPopoverActive] = useState(false);
    const [activeDateRange, setActiveDateRange] = useState(comparison ? comparisonRanges[0] : defRanges[2]);
    const [inputValues, setInputValues] = useState({});
    const [{ month, year }, setDate] = useState({
        month: activeDateRange.period?.since.getMonth(),
        year: activeDateRange.period?.since.getFullYear(),
    });
    const datePickerRef = useRef(null);
    const VALID_YYYY_MM_DD_DATE_REGEX = /^\d{4}-\d{1,2}-\d{1,2}/;
    function isDate(date) {
        return !isNaN(new Date(date).getDate());
    }
    function isValidYearMonthDayDateString(date) {
        return VALID_YYYY_MM_DD_DATE_REGEX.test(date) && isDate(date);
    }
    function isValidDate(date) {
        return date.length === 10 && isValidYearMonthDayDateString(date);
    }
    function parseYearMonthDayDateString(input) {
        // Date-only strings (e.g. "1970-01-01") are treated as UTC, not local time
        // when using new Date()
        // We need to split year, month, day to pass into new Date() separately
        // to get a localized Date
        const [year, month, day] = input.split("-");
        return new Date(Number(year), Number(month) - 1, Number(day));
    }

    const formatDateToString = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    function formatDate(date) {
        return formatDateToYearMonthDayDateString(date);
    }

    function nodeContainsDescendant(rootNode, descendant) {
        if (rootNode === descendant) {
            return true;
        }
        let parent = descendant.parentNode;
        while (parent != null) {
            if (parent === rootNode) {
                return true;
            }
            parent = parent.parentNode;
        }
        return false;
    }
    function isNodeWithinPopover(node) {
        return datePickerRef?.current
            ? nodeContainsDescendant(datePickerRef.current, node)
            : false;
    }
    function handleStartInputValueChange(value) {
        setInputValues((prevState) => {
            return { ...prevState, since: value };
        });

        if (isValidDate(value)) {
            const newSince = parseYearMonthDayDateString(value);
            setActiveDateRange((prevState) => {
                const newPeriod =
                    prevState.period && newSince <= prevState.period.until
                        ? { since: newSince, until: prevState.period.until }
                        : { since: newSince, until: newSince };
                return {
                    ...prevState,
                    period: newPeriod,
                };
            });
        }
    }
    function handleEndInputValueChange(value) {
        setInputValues((prevState) => ({ ...prevState, until: value }));
        if (isValidDate(value)) {
            const newUntil = parseYearMonthDayDateString(value);
            setActiveDateRange((prevState) => {
                const newPeriod =
                    prevState.period && newUntil >= prevState.period.since
                        ? { since: prevState.period.since, until: newUntil }
                        : { since: newUntil, until: newUntil };
                return {
                    ...prevState,
                    period: newPeriod,
                };
            });
        }
    }
    function handleInputBlur({ relatedTarget }) {
        const isRelatedTargetWithinPopover =
            relatedTarget != null && isNodeWithinPopover(relatedTarget);
        // If focus moves from the TextField to the Popover
        // we don't want to close the popover
        if (isRelatedTargetWithinPopover) {
            return;
        }
        setPopoverActive(false);
    }
    function handleMonthChange(month, year) {
        setDate({ month, year });
    }
    function handleCalendarChange({ start, end }) {
        const newDateRange = ranges.find((range) => {
            return (
                range.period.since.valueOf() === start.valueOf() &&
                range.period.until.valueOf() === end.valueOf()
            );
        }) || {
            alias: "custom",
            title: "Custom",
            period: {
                since: start,
                until: end,
            },
        };
        setActiveDateRange(newDateRange);
    }
    function apply() {
        setPopoverActive(false);

        if (comparison) {
            dispatch(setComparisonDate({
                from: formatDate(activeDateRange.period.since),
                to: formatDate(activeDateRange.period.until),
            }));

            dispatch(setComparison(activeDateRange.alias !== 'noComparison'));
        } else {
            dispatch(setDateStore({
                from: formatDate(activeDateRange.period.since),
                to: formatDate(activeDateRange.period.until),
                alias: activeDateRange.alias,
            }));
        }
    }
    function cancel() {
        setPopoverActive(false);
    }
    useEffect(() => {
        if (activeDateRange && activeDateRange.period) {
            setInputValues({
                since: formatDateToString(activeDateRange.period.since),
                until: formatDateToString(activeDateRange.period.until),
            });

            function monthDiff(referenceDate, newDate) {
                return (
                    newDate.month -
                    referenceDate.month +
                    12 * (referenceDate.year - newDate.year)
                );
            }
            const monthDifference = monthDiff(
                { year, month },
                {
                    year: activeDateRange.period.until.getFullYear(),
                    month: activeDateRange.period.until.getMonth(),
                }
            );
            if (monthDifference > 1 || monthDifference < 0) {
                setDate({
                    month: activeDateRange.period.until.getMonth(),
                    year: activeDateRange.period.until.getFullYear(),
                });
            }
        }
    }, [activeDateRange]);

    const buttonValue = activeDateRange.title === "Custom"
        ? activeDateRange.period.since.toDateString() + " - " + activeDateRange.period.until.toDateString()
        : activeDateRange.title;

    return (
        <Popover
            active={popoverActive}
            autofocusTarget="none"
            preferredAlignment="left"
            preferredPosition="below"
            fluidContent
            sectioned={false}
            fullHeight
            activator={
                <ShowButton
                    onClick={() => setPopoverActive(!popoverActive)}
                    text={buttonValue}
                    type={props.type}
                />
            }
            onClose={() => setPopoverActive(false)}
        >
            <Popover.Pane fixed>
                <Columns
                    columns={{
                        xs: "1fr",
                        mdDown: "1fr",
                        md: "max-content max-content",
                    }}
                    gap={0}
                // ref={datePickerRef}
                >
                    <Box
                        maxWidth={mdDown ? "516px" : "212px"}
                        width={mdDown ? "100%" : "212px"}
                        padding={{ xs: 5, md: 0 }}
                        paddingBlockEnd={{ xs: 1, md: 0 }}
                    >
                        {mdDown ? (
                            <Select
                                label="dateRangeLabel"
                                labelHidden
                                onChange={(value) => {
                                    const result = ranges.find(
                                        ({ title, alias }) => title === value || alias === value
                                    );
                                    setActiveDateRange(result);
                                }}
                                value={activeDateRange?.title || activeDateRange?.alias || ""}
                                options={ranges.map(({ alias, title }) => title || alias)}
                            />
                        ) : (
                            <Scrollable style={{ height: "334px" }}>
                                <OptionList
                                    options={ranges.map((range) => ({
                                        value: range.alias,
                                        label: range.title,
                                    }))}
                                    selected={activeDateRange.alias}
                                    onChange={(value) => {
                                        setActiveDateRange(
                                            ranges.find((range) => range.alias === value[0])
                                        );
                                    }}
                                />
                                <DropDown button="Quarters">
                                    <OptionList
                                        options={quartersRange.map((range) => ({
                                            value: range.alias,
                                            label: range.title,
                                        }))}
                                        selected={activeDateRange.alias}
                                        onChange={(value) => {
                                            setActiveDateRange(
                                                quartersRange.find((range) => range.alias === value[0])
                                            );
                                        }}
                                    />
                                </DropDown>
                                <DropDown button="Black Friday Cyber Monday">
                                    <OptionList
                                        options={blackFridayRange.map((range) => ({
                                            value: range.alias,
                                            label: range.title,
                                        }))}
                                        selected={activeDateRange.alias}
                                        onChange={(value) => {
                                            setActiveDateRange(
                                                blackFridayRange.find((range) => range.alias === value[0])
                                            );
                                        }}
                                    />
                                </DropDown>
                            </Scrollable>
                        )}
                    </Box>
                    <Box padding={{ xs: 5 }} maxWidth={mdDown ? "320px" : "516px"}>
                        <AlphaStack gap="4">
                            <Inline gap="2" blockAlign="center">
                                <div style={{ flexGrow: 1 }}>
                                    <TextField
                                        role="combobox"
                                        label={"Since"}
                                        labelHidden
                                        // prefix={<Icon source={CalendarMinor} />}
                                        value={inputValues.since}
                                        onChange={handleStartInputValueChange}
                                        onBlur={handleInputBlur}
                                        autoComplete="off"
                                    />
                                </div>
                                <div className="WAzLI"><span className="Polaris-Icon_yj27d Polaris-Icon--colorSubdued_113xs Polaris-Icon--applyColor_2y25n"><span className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414l3.293 3.293h-11.586a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path></svg></span></div>
                                <div style={{ flexGrow: 1 }}>
                                    <TextField
                                        role="combobox"
                                        label={"Until"}
                                        labelHidden
                                        // prefix={<Icon source={CalendarMinor} />}
                                        value={inputValues.until}
                                        onChange={handleEndInputValueChange}
                                        onBlur={handleInputBlur}
                                        autoComplete="off"
                                    />
                                </div>
                            </Inline>
                            <div>
                                <DatePicker
                                    weekStartsOn='1'
                                    month={month}
                                    year={year}
                                    selected={{
                                        start: activeDateRange.period?.since,
                                        end: activeDateRange.period?.until,
                                    }}
                                    onMonthChange={handleMonthChange}
                                    onChange={handleCalendarChange}
                                    multiMonth={shouldShowMultiMonth}
                                    allowRange
                                />
                            </div>
                        </AlphaStack>
                    </Box>
                </Columns>
            </Popover.Pane>
            <Popover.Pane fixed>
                <Popover.Section>
                    <Inline align="end" gap="4">
                        <Button onClick={cancel}>Cancel</Button>
                        <Button primary onClick={apply}>
                            Apply
                        </Button>
                    </Inline>
                </Popover.Section>
            </Popover.Pane>
        </Popover>
    )
}

export default DateRangePicker;