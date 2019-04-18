'use strict';
const {sequelize, Sequelize} = require('../index');

const WifiType = sequelize.define('WifiType', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: Sequelize.STRING
    }

}, {
    tableName: 'wifi_type',
    timestamps: false
});

module.exports = WifiType;
