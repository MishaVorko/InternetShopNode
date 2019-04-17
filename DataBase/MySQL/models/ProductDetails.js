'use strict';
const {sequelize, Sequelize} = require('../index');

const ProductDetails = sequelize.define('ProductDetails', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    screen_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    communication_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    os_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    processor_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    memory_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    connectors_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    interfaces_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    battery_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    corps_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    additional_features: {
        type: Sequelize.INTEGER
    }
},{
    tableName: 'product_details',
    timestamps: false
});

module.exports = ProductDetails;
