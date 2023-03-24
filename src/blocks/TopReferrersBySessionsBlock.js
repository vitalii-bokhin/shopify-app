import SimpleTableComponent from '../components/SimpleTableComponent';

export default function TopReferrersBySessionsBlock() {
    const items = [
        {
            id: 1,
            title: 'baidu.com',
            count: 202,
        },
        {
            id: 2,
            title: 'googleads.g.doubleclick.net',
            count: 15,
        },
    ];

    return (
        <SimpleTableComponent
            items={items}
            renderTitle={(item) => (
                <a href={'https://' + item} className="Polaris-Link_yj5sy">{item}</a>
            )}
        />
    );
};