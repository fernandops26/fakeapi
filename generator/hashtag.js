const Chance = require('chance');

const chance = new Chance();

// from: using change library
module.exports = async () => {
  const items = Array(100)
    .fill(1)
    .map((_, i) => ({
      id: i + 1,
      hashtag: chance.hashtag(),
      mentions: chance.integer({ min: 100, max: 5000 }),
    }));

  return items;
};
