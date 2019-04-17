'use strict';
const {sequelize, Sequelize} = require('../index');

const Corps = sequelize.define('Corps', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    protection_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    material_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    height: {
        type: Sequelize.DECIMAL(5,1)
    },
    width: {
        type: Sequelize.DECIMAL(5,1)
    },
    depth: {
        type: Sequelize.DECIMAL(3,1)
    },
    weight: {
        type: Sequelize.INTEGER
    }

}, {
    tableName: 'corps',
    timestamps: false
});

module.exports = Corps;
