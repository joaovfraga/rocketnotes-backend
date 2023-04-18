const sqliteConnection = require('../../sqlite');
const CreateUsers = require('./createUsers');

async function migrationRun(){
  const schemas = [
    CreateUsers
  ].join('');

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error(error))
};

module.exports = migrationRun;