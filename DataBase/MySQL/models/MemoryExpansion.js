'use strict';
const {sequelize, Sequelize} = require('../index');

const MemoryExpansion = sequelize.define('MemoryExpansion', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    expansion: {
        type: Sequelize.STRING
    }

}, {
    tableName: 'memory_expansion',
    timestamps: false
});

module.exports = MemoryExpansion;
