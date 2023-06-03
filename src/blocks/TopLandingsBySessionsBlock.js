import SessionsComponent from 'src/components/SessionsComponent';

export default function TopLandingsBySessionsBlock(props) {

    const items = [
        {
            id: 1,
            title: '/uk/products/%d0%bf%d0%be%d0%b2%d0%b5%d1%80%d0%b1%d0%b0%d0%bd%d0%ba-%d0%bd%d0%be%d0%b2%d0%be%d0%b3%d0%be-%d0%bf%d0%be%d0%ba%d0%be%d0%bb%d1%96%d0%bd%d0%bd%d1%8f-2022-powerbank-baseus-bipow-20w-30000',
        },
        {
            id: 2,
            title: '/products/%d0%bf%d0%be%d0%b2%d0%b5%d1%80%d0%b1%d0%b0%d0%bd%d0%ba-%d0%bd%d0%be%d0%b2%d0%be%d0%b3%d0%be-%d0%bf%d0%be%d0%ba%d0%be%d0%bb%d1%96%d0%bd%d0%bd%d1%8f-2022-powerbank-baseus-bipow-20w-30000',
        },
    ];

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