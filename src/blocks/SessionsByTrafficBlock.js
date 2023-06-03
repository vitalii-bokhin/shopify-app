import SessionsComponent from 'src/components/SessionsComponent';

export default function SessionsByTrafficBlock(props) {
    const items = [
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
            title: 'Email',
        },
        {
            id: 5,
            title: 'Search',
        },
    ];

    return <SessionsComponent items={items} {...props} />;
};