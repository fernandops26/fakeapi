const axios = require('axios');
const faker = require('faker');

// from: https://dog.ceo/dog-api/documentation/random
module.exports = async () => {
  const data = await axios.get('https://dog.ceo/api/breeds/image/random/50');

  const images = data.data.message;

  const items = images.map((image, i) => ({
    id: i + 1,
    name: faker.name.firstName(),
    image,
  }));

  return items;
};
