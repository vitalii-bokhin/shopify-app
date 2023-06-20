import { LineChart } from '@shopify/polaris-viz';
import { useSelector } from 'react-redux';
import formatDateToString from '../../app/features/formatDateToString';

export default function LineChartComponent(props) {
    const mainPeriodAlias = useSelector((state) => state.datepicker.mainRange.alias);
    const data = [];
    let prefix = props.prefix;

    const name = (period) => {
        const dateFrom = new Date(period.from).setHours(0, 0, 0, 0);
        const dateTo = new Date(period.to).setHours(0, 0, 0, 0);

        if (dateFrom == dateTo) {
            return formatDateToString(dateFrom);
        } else {
            let opt;

            if (new Date(dateFrom).getFullYear() == new Date(dateTo).getFullYear()) {
                opt = { month: 'short', day: 'numeric' };
            }

            return formatDateToString(dateFrom, opt) + '–' + formatDateToString(dateTo);
        }
    }

    data.push({
        name: name(props.period),
        data: props.data,
    });

    if (props.compareData && props.compareData.length) {
        data.push({
            name: name(props.comparePeriod),
            data: props.compareData,
            isComparison: true,
        });
    }

    const xAxisOptions = {
        labelFormatter: (value) => {
            if (
                mainPeriodAlias === 'today'
                || mainPeriodAlias === 'yesterday'
                || (mainPeriodAlias === 'custom' && props.period.from === props.period.to)
            ) {
                return value.split(',')[1];
            } else {
                return value.split(',')[0];
            }
        },
    };

    const yAxisOptions = {
        labelFormatter: (value) => {
            if (value >= 1000) {
                value = value / 1000 + 'K';
            }

            return prefix + value;
        },
    };

    const tooltipOptions = {
        valueFormatter: (value) => {
            return prefix + value.toLocaleString('en-US');
        },
    };

    return (
        <div>
            <div
                style={{
                    background: '#ffffff'
                }}
            >
                <LineChart
                    data={data}
                    isAnimated
                    theme='Light'
                    xAxisOptions={xAxisOptions}
                    yAxisOptions={yAxisOptions}
                    tooltipOptions={tooltipOptions}
                />
            </div>
        </div>
    );
}