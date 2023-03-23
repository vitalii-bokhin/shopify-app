'use strict';
const fs = require('fs');

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
date.setHours(0, 0, 0, 0);

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

for (let i = 0; i < 1024; i++) {
    data.push({
        "cart": getRandomInt(30),
        "checkout": getRandomInt(50),
        "converted_sessions": getRandomInt(25),
        "date": format(date),
        "orders": getRandomInt(10),
        "return_customer_rate": getRandomInt(700) / 100,
        "sales": getRandomInt(50000) / 100,
        "sessions": getRandomInt(1000),
        "visitors": getRandomInt(800)
    });

    date.setDate(date.getDate() - 1);
}

data.reverse();

fs.writeFileSync('./data.json', JSON.stringify(data), (error) => {
    console.error(error);
});