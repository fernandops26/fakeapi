const dog = require('./dog');
const domains = require('./domains');
const libraries = require('./libraries');
const hashtag = require('./hashtag');
const shortLorems = require('./shortLorems');
const longLorems = require('./longLorems');
const users = require('./users');
const jobs = require('./jobs');
const visits = require('./visits');
const transactions = require('./transactions');
const products = require('./products');
const geoLocations = require('./geolocations');
const writer = require('./../util/writer');

const init = async () => {
  const dogData = await dog();
  const domainsData = await domains();
  const librariesData = await libraries();
  const hashtagData = await hashtag();
  const shortLoremData = await shortLorems();
  const longLoremData = await longLorems();
  const userData = await users();
  const jobData = await jobs();
  const visitData = await visits();
  const transactionData = await transactions();
  const productData = await products();
  const geoLocationData = await geoLocations();

  /*writer('dogs.json', dogData);
  writer('domains.json', domainsData);*/
  writer('libraries.json', librariesData);
  /*writer('hashtags.json', hashtagData);
  writer('shortLorems.json', shortLoremData);
  writer('longLorems.json', longLoremData);
  writer('users.json', userData);
  writer('jobs.json', jobData);
  writer('visits.json', visitData);
  writer('transactions.json', transactionData);
  writer('products.json', productData);
  writer('geolocations.json', geoLocationData);*/
};

init();
