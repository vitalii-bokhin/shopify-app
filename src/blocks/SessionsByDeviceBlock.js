import { useGetSettingsQuery } from 'src/app/services/firebaseApi';
import SessionsComponent from 'src/components/SessionsComponent';


export default function SessionsByDeviceBlock(props) {
    const { data } = useGetSettingsQuery();
    const items = [];

    if (data && data.device_type) {
        data.device_type.map((val, i) => {
            items.push({
                id: i + 1,
                title: val,
            });
        });
    }

    return <SessionsComponent items={items} {...props} />;
};