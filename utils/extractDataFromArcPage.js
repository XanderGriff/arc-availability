'use strict';

const cheerio = require('cheerio');

const extractDataFromArcPage = (html) => {
  const $ = cheerio.load(html);
  const availabilities = $('div[role=main] .list-group');
  return availabilities;
};

module.exports = {
  extractDataFromArcPage,
};
