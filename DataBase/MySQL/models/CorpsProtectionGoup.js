'use strict';
const {sequelize, Sequelize} = require('../index');

const CorpsProtection = sequelize.define('CorpsProtection', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    protection: {
        type: Sequelize.STRING
    }
}, {
    tableName: 'corps_protection_group',
    timestamps: false
});

module.exports = CorpsProtection;
