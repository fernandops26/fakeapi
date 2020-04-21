const faker = require('faker');

// from: using faker library
module.exports = async () => {
  const items = Array(100)
    .fill(1)
    .map((_, i) => ({
      id: i + 1,
      text: faker.lorem.words(),
    }));

  return items;
};
