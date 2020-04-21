const dog = require('./dog');
const domains = require('./domains');
const writer = require('./../util/writer');

const init = async () => {
  const dogData = await dog();
  const domainsData = await domains();

  writer('dogs.json', dogData);
  writer('domains.json', domainsData);
};

init();
