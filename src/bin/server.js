require('dotenv').config();
global.Promise = require('bluebird');

const models = require('../models/index');
const port = ( process.env.PORT || 5000 );
const express = require('express');
const app = express();

// importing all changes to app object
require('../app')(app);

// Connecting to postgres database
models.sequelize.sync({
  force: true // Temporary for development
}).then(() => {
  console.log("Successfully migrated and connected to database");

  // Insert into schools table a default entry for now
  models.school.create({
    name: "UC Santa Barbara"
  }).then(() => {
    console.log("Successfully added UC Santa Barbara to schools table");
  }).catch((err) => {
    console.log("Could not insert into schools table the value \'UC Santa Barbara\', because it already existed");
  });

  app.listen(port, () => {
    console.log('Server listening in on port', port);
  });

}).catch((err) => {
  console.log("Could not connect to database", err);
});
