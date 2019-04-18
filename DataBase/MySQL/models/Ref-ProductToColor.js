'use strict';
const {sequelize, Sequelize} = require('../index');

const ProductToColor = sequelize.define('ProductToColor', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    color_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    product_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }

}, {
    tableName: 'ref_prod_color',
    timestamps: false
});

module.exports = ProductToColor;
