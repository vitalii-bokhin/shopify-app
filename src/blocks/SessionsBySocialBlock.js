import SessionsComponent from 'src/components/SessionsComponent';

export default function SessionsBySocialBlock(props) {

    const items = [
        {
            id: 1,
            title: 'Facebook',
        },
        {
            id: 2,
            title: 'Tiktok',
        },
        {
            id: 3,
            title: 'Instagram',
        },
        {
            id: 4,
            title: 'Youtube',
        },
    ];

    return <SessionsComponent items={items} {...props} />;
};