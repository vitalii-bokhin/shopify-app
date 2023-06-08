import { useGetSettingsQuery } from 'src/app/services/firebaseApi';
import SalesComponent from 'src/components/SalesComponent';


export default function SalesByTrafficSourceBlock(props) {
    const { data } = useGetSettingsQuery();
    const items = [];

    if (data && data.sales_traffic_source) {
        data.sales_traffic_source.map((val, i) => {
            items.push({
                id: i + 1,
                title: val,
            });
        });
    }

    return <SalesComponent items={items} prefix="$" {...props} />;
};