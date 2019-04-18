'use strict';
const {sequelize, Sequelize} = require('../index');

const InterfacesToNavSystem = sequelize.define('InterfacesToNavSystem', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    products_details_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    nav_system_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }

}, {
    tableName: 'ref_interfaces_nav_system',
    timestamps: false
});

module.exports = InterfacesToNavSystem;
