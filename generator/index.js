const dog = require('./dog');
const writer = require('./../util/writer');

const init = async () => {
  const dogData = await dog();
  writer('dog.json', dogData);
};

init();
