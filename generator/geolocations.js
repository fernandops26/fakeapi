const faker = require('faker');

// from: faker
module.exports = async () => {
  const userCredit = faker.helpers.createCard();

  const items = Array(100)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      streetA: userCredit.address.streetA,
      streetB: userCredit.address.streetB,
      streetC: userCredit.address.streetC,
      streetD: userCredit.address.streetD,
      city: userCredit.address.city,
      state: userCredit.address.state,
      country: userCredit.address.country,
      zipcode: userCredit.address.zipcode,
      latitude: userCredit.address.geo.lat,
      longitude: userCredit.address.geo.lng,
    }));

  return items;
};
