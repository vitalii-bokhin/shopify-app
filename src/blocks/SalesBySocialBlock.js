import SimpleTableComponent from '../components/SimpleTableComponent';

export default function SalesBySocialBlock() {
    const items = [
        {
            id: 1,
            title: 'Facebook',
            count: '$' + 17188.09,
        },
        {
            id: 2,
            title: 'Tiktok',
            count: '$' + 989.89,
        },
    ];

    return <SimpleTableComponent items={items} />;
};