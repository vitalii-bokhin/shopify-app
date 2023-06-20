export default function formatDateToYearMonthDayDateString(date) {
    const year = String(date.getFullYear());
    let month = String(date.getMonth() + 1);
    let day = String(date.getDate());
    if (month.length < 2) {
        month = String(month).padStart(2, "0");
    }
    if (day.length < 2) {
        day = String(day).padStart(2, "0");
    }
    return [year, month, day].join("-");
}