const request = require('../util/request');
const faker = require('faker');

// from: https://api.domainsdb.info/
module.exports = async () => {
  const data = await request(
    'https://api.domainsdb.info/v1/domains/search?zone=com'
  );

  const { domains: result } = data;

  const items = result.map((item, i) => ({
    id: i + 1,
    domain: faker.internet.domainName(),
    country: item.country,
    isDead: item.idDead,
    A: [faker.internet.ip()],
    NS: item.NS,
    MX: item.MX,
    CNAME: item.CNAME,
    TXT: item.TXT,
  }));

  return items;
};
