import SessionsComponent from 'src/components/SessionsComponent';

export default function SessionsByLocationBlock(props) {
    
    const items = [
        {
            id: 1,
            title: 'United States',
        },
        {
            id: 2,
            title: 'Australia',
        },
        {
            id: 3,
            title: 'Canada',
        },
        {
            id: 4,
            title: 'United Kingdom',
        },
        {
            id: 5,
            title: 'New Zeland',
        },
        {
            id: 6,
            title: 'Czech Republic',
        },
    ];

    return <SessionsComponent items={items} {...props} />;
};