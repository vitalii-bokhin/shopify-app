import { AlphaStack, Box, Button, Collapsible, Columns, DatePicker, Icon, Inline, OptionList, Popover, Scrollable, Select, TextField, useBreakpoints } from '@shopify/polaris';
import { ChevronDownMinor, ChevronUpMinor } from '@shopify/polaris-icons';
import { useEffect, useRef, useState } from 'react';
import formatDateToString from './../../app/features/formatDateToString';

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

export default function DateRangePicker(props) {
    const { mdDown, lgUp } = useBreakpoints();
    const shouldShowMultiMonth = lgUp;
    const comparison = props.type == 'comparison';

    const ranges = props.ranges;
    const quartersRanges = props.quartersRanges;
    const blackFridayRanges = props.blackFridayRanges;

    const [popoverActive, setPopoverActive] = useState(false);
    const [dateRange, setDateRange] = useState(props.activeRange);
    const [inputValues, setInputValues] = useState({});

    const [{ month, year }, setDate] = useState({
        month: new Date(dateRange.period.from || Date.now()).getMonth(),
        year: new Date(dateRange.period.from || Date.now()).getFullYear(),
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
        const [year, month, day] = input.split("-");
        return new Date(Number(year), Number(month) - 1, Number(day));
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
            return { ...prevState, from: value };
        });

        if (isValidDate(value)) {
            const newSince = parseYearMonthDayDateString(value);
            setDateRange((prevState) => {
                const newPeriod =
                    prevState.period && newSince <= prevState.period.to
                        ? { from: newSince, to: prevState.period.to }
                        : { from: newSince, to: newSince };
                return {
                    ...prevState,
                    period: newPeriod,
                };
            });
        }
    }
    function handleEndInputValueChange(value) {
        setInputValues((prevState) => ({ ...prevState, to: value }));
        if (isValidDate(value)) {
            const newUntil = parseYearMonthDayDateString(value);
            setDateRange((prevState) => {
                const newPeriod =
                    prevState.period && newUntil >= prevState.period.from
                        ? { from: prevState.period.from, to: newUntil }
                        : { from: newUntil, to: newUntil };
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
                range.period.from.valueOf() === start.valueOf() &&
                range.period.to.valueOf() === end.valueOf()
            );
        }) || {
            alias: "custom",
            title: "Custom",
            period: {
                from: start,
                to: end,
            },
        };

        setDateRange(newDateRange);
    }

    function apply() {
        setPopoverActive(false);
        props.setActiveRange(dateRange);
    }

    function cancel() {
        setPopoverActive(false);
        setDateRange(props.activeRange);
    }

    useEffect(() => {
        if (dateRange) {
            setInputValues({
                from: comparison && !dateRange.period.from
                    ? ''
                    : formatDateToString(new Date(dateRange.period.from), { year: 'numeric', month: 'long', day: 'numeric' }),
                to: comparison && !dateRange.period.from
                    ? ''
                    : formatDateToString(new Date(dateRange.period.to), { year: 'numeric', month: 'long', day: 'numeric' }),
            });

            const newDate = {
                year: new Date(dateRange.period.to).getFullYear(),
                month: new Date(dateRange.period.to).getMonth(),
            };

            const monthDifference = newDate.month - month + 12 * (year - newDate.year);

            if (monthDifference > 1 || monthDifference < 0) {
                setDate({
                    month: new Date(dateRange.period.to).getMonth(),
                    year: new Date(dateRange.period.to).getFullYear(),
                });
            }
        }
    }, [dateRange]);

    // button text
    let buttonValue = props.activeRange.title;

    if (props.activeRange.alias === 'custom') {
        if (props.activeRange.from === props.activeRange.to) {
            buttonValue = formatDateToString(dateRange.period.from);
        } else {
            buttonValue = formatDateToString(dateRange.period.from) + '–' + formatDateToString(dateRange.period.to);
        }
    }

    // buttonValue = dateRange.title === 'Custom'
    //     ? new Date(dateRange.period.from).toDateString() + ' - ' + new Date(dateRange.period.to).toDateString()
    //     : props.activeRange.title;

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
                                    setDateRange(result);
                                }}
                                value={dateRange?.title || dateRange?.alias || ""}
                                options={ranges.map(({ alias, title }) => title || alias)}
                            />
                        ) : (
                            <Scrollable style={{ height: "334px" }}>
                                <OptionList
                                    options={ranges.map((range) => ({
                                        value: range.alias,
                                        label: range.title,
                                    }))}
                                    selected={dateRange.alias}
                                    onChange={(value) => {
                                        setDateRange(
                                            ranges.find((range) => range.alias === value[0])
                                        );
                                    }}
                                />
                                <DropDown button="Quarters">
                                    <OptionList
                                        options={quartersRanges.map((range) => ({
                                            value: range.alias,
                                            label: range.title,
                                        }))}
                                        selected={dateRange.alias}
                                        onChange={(value) => {
                                            setDateRange(
                                                quartersRanges.find((range) => range.alias === value[0])
                                            );
                                        }}
                                    />
                                </DropDown>
                                <DropDown button="Black Friday Cyber Monday">
                                    <OptionList
                                        options={blackFridayRanges.map((range) => ({
                                            value: range.alias,
                                            label: range.title,
                                        }))}
                                        selected={dateRange.alias}
                                        onChange={(value) => {
                                            setDateRange(
                                                blackFridayRanges.find((range) => range.alias === value[0])
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
                                        value={inputValues.from}
                                        onChange={handleStartInputValueChange}
                                        onBlur={handleInputBlur}
                                        autoComplete="off"
                                        placeholder='YYYY-MM-DD'
                                    />
                                </div>
                                <div className="WAzLI"><span className="Polaris-Icon_yj27d Polaris-Icon--colorSubdued_113xs Polaris-Icon--applyColor_2y25n"><span className="Polaris-Text--root_yj4ah Polaris-Text--visuallyHidden_yrtt6"></span><svg viewBox="0 0 20 20" className="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="m17.707 9.293-5-5a.999.999 0 1 0-1.414 1.414l3.293 3.293h-11.586a1 1 0 1 0 0 2h11.586l-3.293 3.293a.999.999 0 1 0 1.414 1.414l5-5a.999.999 0 0 0 0-1.414z"></path></svg></span></div>
                                <div style={{ flexGrow: 1 }}>
                                    <TextField
                                        role="combobox"
                                        value={inputValues.to}
                                        onChange={handleEndInputValueChange}
                                        onBlur={handleInputBlur}
                                        autoComplete="off"
                                        placeholder='YYYY-MM-DD'
                                    />
                                </div>
                            </Inline>
                            <div>
                                <DatePicker
                                    weekStartsOn='1'
                                    month={month}
                                    year={year}
                                    selected={{
                                        start: new Date(dateRange.period.from),
                                        end: new Date(dateRange.period.to),
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