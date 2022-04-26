// seed.js (a utility to seed/initialize the database)

// Uncomment the next line if using a .env to hold the db connection string
require('dotenv').config();

// Connect to the db
require('./config/database');

const Item = require('./models/item');


Item.deleteMany({})
  // results will be an array of the resolved
  // values of the two promises in order
  .then(function(results) {
    console.log(results);
    return Item.create([
      {name: 'Latte', price: 5.25, category: 'Drinks' }, 
      {name: 'Gibraltar', price: 3.25, category: 'Drinks' }, 
      {name: 'Cappuccino', price: 4.25, category: 'Drinks' }, 
      {name: 'Espresso', price: 2.25, category: 'Drinks' }, 
      {name: 'Concha', price: 3.25, category: 'Pastries' }, 
      {name: 'Mantecado', price: 2.25, category: 'Pastries' }, 
      {name: 'Puerquito', price: 2.15, category: 'Pastries' }

    ]);
  })
  .then(function () {
    process.exit();
  })