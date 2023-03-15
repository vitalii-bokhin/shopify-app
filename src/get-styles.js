'use strict';
const fs = require('fs');
const axios = require('axios');
const { load } = require('cheerio');

const indexHtml = fs.readFileSync('./../public/index.html');
const $ = load(indexHtml);
const urls = [];
let result = '';

$('link[rel="stylesheet"]').each(function () {
    urls.push($(this).attr('href'));
});

(async () => {
    for (const url of urls) {
        try {
            const { data } = await axios.get(url);
            result += data;
        } catch (error) {
            console.error(error);
        }
    }

    fs.writeFileSync('./styles.css', result);
})();
