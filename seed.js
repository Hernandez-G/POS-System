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
      {name: 'Latte', price: 4.00, category: 'Drinks' }, 
      {name: 'Gibralter', price: 5.20, category: 'Drinks' }, 
      {name: 'Capp', price: 5.10, category: 'Drinks' }, 
      {name: 'Loaf Bread', price: 3.10, category: 'Pastries' }, 
      {name: 'Blondie', price: 2.50, category: 'Pastries' }, 

    ]);
  })
  .then(function () {
    process.exit();
  })