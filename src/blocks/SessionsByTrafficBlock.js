import { useGetSettingsQuery } from 'src/app/services/firebaseApi';
import SessionsComponent from 'src/components/SessionsComponent';

export default function SessionsByTrafficBlock(props) {
    const { data } = useGetSettingsQuery();
    const items = [];

    if (data && data.traffic_source) {
        data.traffic_source.map((val, i) => {
            items.push({
                id: i + 1,
                title: val,
            });
        });
    }

    return <SessionsComponent items={items} {...props} />;
};