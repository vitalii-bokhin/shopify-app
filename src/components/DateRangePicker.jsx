import { AlphaStack, Box, Button, Columns, DatePicker, Icon, Inline, OptionList, Popover, Scrollable, Select, TextField, useBreakpoints } from '@shopify/polaris';
import { useEffect, useRef, useState } from 'react';

const ShowButton = (props) => {
    return (
        <button onClick={props.onClick} className="Polaris-Button_r99lw Polaris-Button--sizeSlim_1p6ue Polaris-Button--fullWidth_zyvh4"
            type="button" tabIndex="0" aria-controls="Polarispopover130" aria-owns="Polarispopover130"
            aria-expanded="false"><span className="Polaris-Button__Content_xd1mk"><span
                className="Polaris-Button__Icon_yj27d"><span className="Polaris-Icon_yj27d"><span
                    className="Polaris-Text--root_yj4ah Polaris-Text--bodySm_nvqxj Polaris-Text--regular_pjgr0 Polaris-Text--visuallyHidden_yrtt6"></span><svg
                        viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false"
                        aria-hidden="true">
                        <path fillRule="evenodd"
                            d="M7 2a1 1 0 0 1 1 1v1h4v-1a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h1v-1a1 1 0 0 1 1-1Zm-2 6v7h10v-7h-10Z">
                        </path>
                    </svg></span></span><span className="Polaris-Button__Text_yj3uv">{props.text}</span>
            </span>
        </button>
    );
}

// This example is for guidance purposes. Copying it will come with caveats.
function DateRangePicker(props) {
    // const dateSelectedEvent = new CustomEvent('dateSelected');
    const { mdDown, lgUp } = useBreakpoints();
    const shouldShowMultiMonth = lgUp;
    const today = new Date(new Date().setHours(0, 0, 0, 0));
    const yesterday = new Date(
        new Date(new Date().setDate(today.getDate() - 1)).setHours(0, 0, 0, 0)
    );
    const ranges = [
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
    ];
    const [popoverActive, setPopoverActive] = useState(false);
    const [activeDateRange, setActiveDateRange] = useState(ranges[0]);
    const [inputValues, setInputValues] = useState({});
    const [{ month, year }, setDate] = useState({
        month: activeDateRange.period.since.getMonth(),
        year: activeDateRange.period.since.getFullYear(),
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
    function formatDateToYearMonthDayDateString(date) {
        const year = String(date.getFullYear());
        let month = String(date.getMonth() + 1);
        let day = String(date.getDate());
        if (month.length < 2) {
            month = String(month).padStart(2, "0");
        }
        if (day.length < 2) {
            day = String(day).padStart(2, "0");
        }
        return [year, month, day].join("-");
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
        console.log("handleStartInputValueChange, validDate", value);
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
        // window.dispatchEvent(dateSelectedEvent);
        props.change();
    }
    function cancel() {
        setPopoverActive(false);
    }
    useEffect(() => {
        if (activeDateRange) {
            setInputValues({
                since: formatDate(activeDateRange.period.since),
                until: formatDate(activeDateRange.period.until),
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
    const buttonValue =
        activeDateRange.title === "Custom"
            ? activeDateRange.period.since.toDateString() +
            " - " +
            activeDateRange.period.until.toDateString()
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
                                    month={month}
                                    year={year}
                                    selected={{
                                        start: activeDateRange.period.since,
                                        end: activeDateRange.period.until,
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
                    <Inline align="end">
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