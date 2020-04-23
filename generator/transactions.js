const faker = require('faker');

// from: faker
module.exports = async () => {
  const items = Array(200)
    .fill(0)
    .map((_, i) => {
      const transaction = faker.helpers.createTransaction();

      return {
        id: i + 1,
        amount: transaction.amount,
        date: transaction.date,
        business: transaction.business,
        accountName: transaction.name,
        type: transaction.type,
        accountNumber: transaction.account,
      };
    });

  return items;
};
