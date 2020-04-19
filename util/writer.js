const path = require('path');
const fs = require('fs');

module.exports = (filename, data) => {
  const dataToSave = JSON.stringify(data);
  fs.writeFileSync(path.join(__dirname, '../databases/', filename), dataToSave);

  console.log('saved: ', filename);
};
