const faker = require('faker');

// from: faker
module.exports = async () => {
  const items = Array(100)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      userAgent: faker.internet.userAgent(),
      ip: faker.internet.ip(),
      date: faker.date.past(),
      countryCode: faker.address.countryCode(),
    }));

  return items;
};
