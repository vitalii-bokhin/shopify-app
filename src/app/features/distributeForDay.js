const periods = {
    today: [0, 0, 0, 0, 0, 0, 7, 13, 0, 25, 15, 5, 35, 0, 0, 0, 0, 0],
    yesterday: [0, 0, 0, 0, 0, 0, 0, 12, 0, 20, 3, 0, 8, 0, 0, 40, 17, 0, 0, 0, 0, 0, 0, 0],
    today2: [0, 0, 0, 0, 0, 5, 2, 25, 0, 13, 0, 20, 3, 30, 2, 0, 0, 0],
    yesterday2: [0, 0, 0, 0, 0, 0, 2, 10, 5, 15, 0, 1, 9, 0, 19, 21, 7, 10, 0, 0, 0, 0, 0, 0],
    custom: [0, 0, 0, 0, 0, 0, 0, 12, 0, 20, 3, 0, 8, 0, 0, 40, 17, 0, 0, 0, 0, 0, 0, 0],
    custom2: [0, 0, 0, 0, 0, 0, 2, 10, 5, 15, 0, 1, 9, 0, 19, 21, 7, 10, 0, 0, 0, 0, 0, 0],
};

export default function distributeForDay(alias, value, formatter) {
    return periods[alias].map(item => {
        let val = (value / 100) * item;

        if (formatter) {
            val = formatter(val);
        }

        return val;
    });
};
