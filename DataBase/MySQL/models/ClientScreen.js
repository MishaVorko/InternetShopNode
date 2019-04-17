'use strict';
const {sequelize, Sequelize} = require('../index');

const ClientScreen = sequelize.define('ClientScreen', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    screen_size: {
        type: Sequelize.STRING
    }
},{
    tableName: 'client_screen',
    timestamps: false
});

module.exports = ClientScreen;
