export default function formatDateToTimeString(date) {
    date = new Date(date);
    const options = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString('en-US', options);
};
