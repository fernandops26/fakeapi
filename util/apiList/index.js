const dogAPI = require('./dog');
const domainAPI = require('./domain');
const libraryAPI = require('./library');
const hashtagAPI = require('./hashtag');
const shortLoremAPI = require('./shortLorem');
const longLoremAPI = require('./longLorem');
const userAPI = require('./user');

module.exports = [].concat(
  dogAPI,
  domainAPI,
  libraryAPI,
  hashtagAPI,
  shortLoremAPI,
  longLoremAPI,
  userAPI
);
