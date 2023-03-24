import SimpleTableComponent from '../components/SimpleTableComponent';

export default function SessionsByDeviceBlock() {
    const items = [
        {
            id: 1,
            title: 'Mobile',
            count: 11218,
        },
        {
            id: 2,
            title: 'Desktop',
            count: 1590,
        },
        {
            id: 3,
            title: 'Other',
            count: 271,
        },
        {
            id: 4,
            title: 'Tablet',
            count: 79,
        },
    ];

    return <SimpleTableComponent items={items} />;
};