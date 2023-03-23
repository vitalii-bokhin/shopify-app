export default function formatDateToString(date) {
    date = new Date(date);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};
