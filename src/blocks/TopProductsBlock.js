import SimpleTableComponent from '../components/SimpleTableComponent';

export default function TopProductsBlock() {
    const items = [
        {
            id: 1,
            title: 'Micro Toner',
            count: 202,
        },
    ];

    return <SimpleTableComponent items={items} />;
};