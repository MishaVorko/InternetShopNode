'use strict';
const {sequelize, Sequelize} = require('../index');

const ProductToComStandarts = sequelize.define('ProductToComStandarts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_details_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    communication_standarts_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }

}, {
    tableName: 'ref_prod_communication_standarts',
    timestamps: false
});

module.exports = ProductToComStandarts;
