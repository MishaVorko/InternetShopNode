'use strict';
const {sequelize, Sequelize} = require('../index');

const Memory = sequelize.define('Memory', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ram: {
        type: Sequelize.INTEGER
    },
    internal_memory: {
        type: Sequelize.INTEGER
    },
    expansion_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }

}, {
    tableName: 'memory',
    timestamps: false
});

const Expansion = require('./MemoryExpansion');

Memory.belongsTo(Expansion, {as: 'MemoryExpansion', foreignKey: 'expansion_id'});

module.exports = Memory;
