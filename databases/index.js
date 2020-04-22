const dogsDb = require('./dogs.json');
const domainsDb = require('./domains.json');
const librariesDb = require('./libraries.json');
const hashtagsDb = require('./hashtags.json');
const shortLoremsDb = require('./shortLorems.json');
const longLoremsDb = require('./longLorems.json');
const usersDb = require('./users.json');
const jobsDB = require('./jobs.json');
const visitsDB = require('./visits.json');
const transactionsDB = require('./transactions.json');
const productsDB = require('./products.json');

module.exports = {
  dogs: dogsDb,
  domains: domainsDb,
  libraries: librariesDb,
  hashtags: hashtagsDb,
  shortlorems: shortLoremsDb,
  longlorems: longLoremsDb,
  users: usersDb,
  jobs: jobsDB,
  visits: visitsDB,
  transactions: transactionsDB,
  products: productsDB,
};
