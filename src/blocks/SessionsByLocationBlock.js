import { useGetSettingsQuery } from 'src/app/services/firebaseApi';
import SessionsComponent from 'src/components/SessionsComponent';

export default function SessionsByLocationBlock(props) {
    const { data } = useGetSettingsQuery();
    const items = [];

    if (data && data.countries) {
        data.countries.map((val, i) => {
            items.push({
                id: i + 1,
                title: val,
            });
        });
    }

    return items.length ? <SessionsComponent items={items} {...props} /> : null;
};