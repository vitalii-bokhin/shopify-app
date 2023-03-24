import SimpleTableComponent from '../components/SimpleTableComponent';

export default function SessionsBySocialBlock() {
    const items = [
        {
            id: 1,
            title: 'Facebook',
            count: 10728,
        },
        {
            id: 2,
            title: 'Tiktok',
            count: 2009,
        },
        {
            id: 3,
            title: 'Instagram',
            count: 321,
        },
        {
            id: 4,
            title: 'Youtube',
            count: 100,
        },
    ];

    return <SimpleTableComponent items={items} />;
};