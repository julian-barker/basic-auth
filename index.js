'use strict';

const { sequelizeDatabase } = require('./src/auth/models');
const { start } = require('./src/server');

// make sure our tables are created, start up the HTTP server.
sequelizeDatabase.sync()
  .then(() => {
    console.log('Successful Connection!');
    start();
  }).catch(e => {
    console.error('Could not start server', e.message);
  });