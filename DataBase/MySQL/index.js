const Sequelize = require('sequelize');
const {dbName, dbUser, dbPass} = require('../../config/mysqlShopConnect');

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = {sequelize, Sequelize};
