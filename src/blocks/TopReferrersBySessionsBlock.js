import SessionsComponent from 'src/components/SessionsComponent';


export default function TopReferrersBySessionsBlock(props) {
    
    const items = [
        {
            id: 1,
            title: 'baidu.com',
        },
        {
            id: 2,
            title: 'googleads.g.doubleclick.net',
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