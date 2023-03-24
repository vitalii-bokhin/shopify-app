import SimpleTableComponent from '../components/SimpleTableComponent';

export default function SessionsByTrafficBlock() {
    const items = [
        {
            id: 1,
            title: 'Social',
            count: 9982,
        },
        {
            id: 2,
            title: 'Direct',
            count: 2225,
        },
        {
            id: 3,
            title: '—',
            count: 658,
        },
        {
            id: 4,
            title: 'Email',
            count: 188,
        },
        {
            id: 5,
            title: 'Search',
            count: 105,
        },
    ];

    return <SimpleTableComponent items={items} />;
};