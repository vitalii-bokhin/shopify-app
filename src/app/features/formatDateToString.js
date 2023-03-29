export default function formatDateToString(date, options) {
    date = new Date(date);
    options = options || { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
};
