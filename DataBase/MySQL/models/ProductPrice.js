'use strict';
const {sequelize, Sequelize} = require('../index');


const ProductPrice = sequelize.define('ProductPrice', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    price: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    currency: {
        type: Sequelize.STRING,
        defaultValue: 'USD'
    },
    discount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'product_price',
    timestamps: false
});

module.exports = ProductPrice;
