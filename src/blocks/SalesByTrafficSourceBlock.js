import SimpleTableComponent from '../components/SimpleTableComponent';

export default function SalesByTrafficSourceBlock() {
    const items = [
        {
            id: 1,
            title: 'Social',
            count: '$' + 16198.2,
        },
        {
            id: 2,
            title: 'Direct',
            count: '$' + 1709.81,
        },
        {
            id: 3,
            title: '—',
            count: '$' + 179.98,
        },
        {
            id: 4,
            title: 'Search',
            count: '$' + 89.99,
        },
    ];

    return <SimpleTableComponent items={items} />;
};