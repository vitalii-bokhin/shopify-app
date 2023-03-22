import { LineChart } from '@shopify/polaris-viz';
import { useSelector } from 'react-redux';

function LineChartComponent(props) {
    const isComparison = useSelector((state) => state.datepicker.isComparison);
    const data = [];
    let prefix = '';

    switch (props.type) {
        case 'sales':
            prefix = '$';
            break;
    }

    const formatDateToString = (date) => {
        date = new Date(date);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const name = (period) => {
        const dateFrom = new Date(period.from).setHours(0, 0, 0, 0);
        const dateTo = new Date(period.to).setHours(0, 0, 0, 0);

        if (dateFrom == dateTo) {
            return formatDateToString(dateFrom);
        } else {
            return formatDateToString(dateFrom) + '–' + formatDateToString(dateTo);
        }
    }

    const chartItems = (data) => {
        return data.map((item) => {
            let value = 0;

            switch (props.type) {
                case 'sales':
                    value = item.sales;
                    break;

                case 'sessions':
                    value = item.sessions;
                    break;
            }

            return {
                value,
                key: formatDateToString(new Date(item.date).setHours(0, 0, 0, 0)),
            };
        });
    }

    data.push({
        name: name(props.period),
        data: chartItems(props.data),
    });

    if (isComparison && props.compareData && props.compareData.length) {
        data.push({
            name: name(props.comparePeriod),
            data: chartItems(props.compareData),
            isComparison: true,
        });
    }

    const xAxisOptions = {
        labelFormatter: (value) => {
            return value.split(',')[0];
        },
    };

    const yAxisOptions = {
        labelFormatter: (value) => prefix + value.toFixed(0),
    };

    const tooltipOptions = {
        valueFormatter: (value) => prefix + value,
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

export default LineChartComponent;