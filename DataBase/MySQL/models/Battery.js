'use strict';
const {sequelize, Sequelize} = require('../index');

const Battery = sequelize.define('Battery', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    capacity: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'battery',
    timestamps: false
});

module.exports = Battery;
