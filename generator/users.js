const faker = require('faker');

// from: faker
module.exports = async () => {
  const items = Array(100)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      avatar: faker.internet.avatar(),
      email: faker.internet.email().toLowerCase(),
      username: faker.internet.userName().toLocaleLowerCase(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
    }));

  return items;
};
