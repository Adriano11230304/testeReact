const { User } = require('./User');

const sequelize = require('../persistence/configDB');

console.log('Sync Models');

sequelize.sync();