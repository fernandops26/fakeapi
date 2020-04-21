const request = require('../util/request');

// from: https://api.cdnjs.com/libraries
module.exports = async () => {
  const data = await request('https://api.cdnjs.com/libraries');

  const { results } = data;

  const items = results.slice(0, 100).map((item, i) => ({
    id: i + 1,
    name: item.name,
    latest: 'https://biglibraryxd.com/ajax/libs/' + item.name + '.min.js',
  }));

  return items;
};
