'use strict';
const {sequelize, Sequelize} = require('../index');


const Products = sequelize.define('Product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    brand: {
        type: Sequelize.STRING
    },
    model: {
        type: Sequelize.STRING
    },
    type: {
        type: Sequelize.STRING
    },
    price_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    country: {
        type: Sequelize.STRING,
        defaultValue: 'none'
    },
    warranty_period: {
        type: Sequelize.STRING,
        defaultValue: 'none'
    },
    equipment: {
        type: Sequelize.STRING,
        defaultValue: 'none'
    },
    details_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    description_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }
}, {
    timestamps: false,
    tableName: 'products'
});

const Price = require('./ProductPrice');
const Details = require('./ProductDetails');
const Description = require('./ProductDescription');

Products.belongsTo(Price, {foreignKey: 'price_id'});
Products.belongsTo(Details, {foreignKey: 'details_id'});
Products.belongsTo(Description, {foreignKey: 'description_id'});

module.exports = Products;
