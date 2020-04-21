const dog = require('./dog');
const domains = require('./domains');
const libraries = require('./libraries');
const writer = require('./../util/writer');

const init = async () => {
  const dogData = await dog();
  const domainsData = await domains();
  const librariesData = await libraries();

  writer('dogs.json', dogData);
  writer('domains.json', domainsData);
  writer('libraries.json', librariesData);
};

init();
