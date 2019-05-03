'use strict';
const {sequelize, Sequelize} = require('../index');

const ProductDetailsToNavSystem = sequelize.define('ProductDetailsToNavSystem', {
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
    tableName: 'ref_product_details_nav_system',
    timestamps: false
});

const ProductDetails = require('./ProductDetails');
const NavSystem = require('./NavigationSystem');

NavSystem.belongsToMany(ProductDetails, {
    through: ProductDetailsToNavSystem,
    foreignKey: 'nav_system_id'
});
ProductDetails.belongsToMany(NavSystem, {
    as: 'NavigateSystem',
    through: ProductDetailsToNavSystem,
    foreignKey: 'products_details_id'
});

module.exports = ProductDetailsToNavSystem;
