import SalesComponent from 'src/components/SalesComponent';


export default function SalesByTrafficSourceBlock(props) {
    
    let items = [
        {
            id: 1,
            title: 'Social',
        },
        {
            id: 2,
            title: 'Direct',
        },
        {
            id: 3,
            title: 'Unknown',
        },
        {
            id: 4,
            title: 'Search',
        },
    ];

    return <SalesComponent items={items} prefix="$" {...props} />;
};