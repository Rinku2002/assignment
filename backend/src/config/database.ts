const { Sequelize } = require('sequelize');
module.exports = new Sequelize('assignment', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
