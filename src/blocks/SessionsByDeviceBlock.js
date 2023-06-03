import SessionsComponent from 'src/components/SessionsComponent';


export default function SessionsByDeviceBlock(props) {
    
    const items = [
        {
            id: 1,
            title: 'Mobile',
        },
        {
            id: 2,
            title: 'Desktop',
        },
        {
            id: 3,
            title: 'Other',
        },
        {
            id: 4,
            title: 'Tablet',
        },
    ];

    return <SessionsComponent items={items} {...props} />;
};