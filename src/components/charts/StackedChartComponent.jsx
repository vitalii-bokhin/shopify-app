import { StackedAreaChart } from '@shopify/polaris-viz';
import { useSelector } from 'react-redux';

export default function StackedChartComponent(props) {
    const mainPeriodAlias = useSelector((state) => state.datepicker.mainRange.alias);
    const data = [];
    let prefix = props.prefix;

    data.push({
        name: 'First-time',
        data: props.firstData,
    });

    data.push({
        name: 'Returning',
        data: props.secondData,
    });

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
            if (prefix) {
                return prefix + value.toFixed(0);
            } else {
                if (value == 0) {
                    return '0';
                } else if (value >= 1000) {
                    return (value / 1000) + 'K';
                } else {
                    return value.toFixed(0);
                }
            }
        },
    };

    const tooltipOptions = {
        valueFormatter: (value) => prefix + Math.round(value).toLocaleString('en-US'),
    };

    return (
        <div>
            <div
                style={{
                    background: '#ffffff'
                }}
            >
                <StackedAreaChart
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