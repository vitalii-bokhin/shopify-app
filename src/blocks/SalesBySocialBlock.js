import SalesComponent from 'src/components/SalesComponent';

export default function SalesBySocialBlock(props) {

    let items = [
        {
            id: 1,
            title: 'Facebook',
        },
        {
            id: 2,
            title: 'Tiktok',
        },
    ];

    return <SalesComponent items={items} prefix="$" {...props} />;
};