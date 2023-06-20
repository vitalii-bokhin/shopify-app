import { useGetSettingsQuery } from 'src/app/services/firebaseApi';
import SessionsComponent from 'src/components/SessionsComponent';

export default function TopLandingsBySessionsBlock(props) {
    const { data } = useGetSettingsQuery();
    const items = [];

    if (data && data.landing_pages) {
        data.landing_pages.map((val, i) => {
            items.push({
                id: i + 1,
                title: val,
            });
        });
    }

    return (
        <SessionsComponent
            items={items}
            renderTitle={(item) => (
                <a href={'https://' + item} className="Polaris-Link_yj5sy">{item}</a>
            )}
            {...props}
        />
    );
};