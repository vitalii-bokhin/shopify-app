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
            if (mainPeriodAlias === 'today' || mainPeriodAlias === 'yesterday') {
                return value.split(',')[1];
            } else {
                return value.split(',')[0];
            }
        },
    };

    const yAxisOptions = {
        labelFormatter: (value) => prefix + value.toFixed(0),
    };

    const tooltipOptions = {
        valueFormatter: (value) => prefix + value.toFixed(0),
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