const dogAPI = require('./dog');
const domainAPI = require('./domain');
const libraryAPI = require('./library');
const hashtagAPI = require('./hashtag');
const shortLoremAPI = require('./shortLorem');
const longLoremAPI = require('./longLorem');
const jobAPI = require('./job');
const userAPI = require('./user');
const visitAPI = require('./visit');
const transactionAPI = require('./transaction');
const productAPI = require('./product');
const geolocationAPI = require('./geoLocation');

module.exports = [].concat(
  dogAPI,
  domainAPI,
  libraryAPI,
  hashtagAPI,
  shortLoremAPI,
  longLoremAPI,
  userAPI,
  jobAPI,
  visitAPI,
  transactionAPI,
  productAPI,
  geolocationAPI
);
