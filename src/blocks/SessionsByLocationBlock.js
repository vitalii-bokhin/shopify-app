import SimpleTableComponent from '../components/SimpleTableComponent';

export default function SessionsByLocationBlock() {
    const items = [
        {
            id: 1,
            title: 'United States',
            count: 5923,
        },
        {
            id: 2,
            title: 'Australia',
            count: 1991,
        },
        {
            id: 3,
            title: 'Canada',
            count: 1687,
        },
        {
            id: 4,
            title: 'United Kingdom',
            count: 1593,
        },
        {
            id: 5,
            title: 'New Zeland',
            count: 1182,
        },
        {
            id: 6,
            title: 'Czech Republic',
            count: 782,
        },
    ];

    return <SimpleTableComponent items={items} />;
};