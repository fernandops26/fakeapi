const faker = require('faker');

// from: faker
module.exports = async () => {
  const items = Array(200)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
      color: faker.commerce.color(),
      provider: faker.company.companyName(),
    }));

  return items;
};
