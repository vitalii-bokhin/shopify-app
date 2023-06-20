export default function differenceInDays(from, to) {
    const date1 = new Date(from);
    const date2 = new Date(to);
    const Difference_In_Time = date2.getTime() - date1.getTime();
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Difference_In_Days;
}
