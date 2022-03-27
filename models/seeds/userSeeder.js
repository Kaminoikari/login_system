const db = require('../../config/mongoose');
const User = require('../accounts');
const userList = require('../../users');

db.once('open', () => {
  User.create(userList);
  console.log('Seeder done!');
});
