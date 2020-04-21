const dogAPI = require('./dog');
const domainAPI = require('./domain');
const libraryAPI = require('./library');

module.exports = [].concat(dogAPI, domainAPI, libraryAPI);
