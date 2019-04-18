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


const Products = require('./Products');
const Color = require('./Colors');

Products.belongsToMany(Color, {
    through: ProductToColor,
    foreignKey: 'product_id'
});
Color.belongsToMany(Products, {
    through: ProductToColor,
    foreignKey: 'color_id'
});

module.exports = ProductToColor;
