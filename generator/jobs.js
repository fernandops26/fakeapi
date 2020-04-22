const Chance = require('chance');

const chance = new Chance();

// from: chance
module.exports = async () => {
  const items = Array(100)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      job: chance.profession(),
      company: chance.company(),
      country: chance.country({ full: true }),
      city: chance.city(),
      salary: chance.integer({ min: 1000, max: 5000 }),
      currency: 'USD',
    }));

  return items;
};
