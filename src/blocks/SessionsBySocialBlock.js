import { useGetSettingsQuery } from 'src/app/services/firebaseApi';
import SessionsComponent from 'src/components/SessionsComponent';

export default function SessionsBySocialBlock(props) {
    const { data } = useGetSettingsQuery();
    const items = [];

    if (data && data.social_source) {
        data.social_source.map((val, i) => {
            items.push({
                id: i + 1,
                title: val,
            });
        });
    }

    return <SessionsComponent items={items} {...props} />;
};