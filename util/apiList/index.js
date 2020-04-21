const dogAPI = require('./dog');
const domainAPI = require('./domain');

module.exports = [].concat(dogAPI, domainAPI);
