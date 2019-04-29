'use strict';
const {sequelize, Sequelize} = require('../index');

const ProductDescription = sequelize.define('ProductDescription', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    short_description: {
        type: Sequelize.STRING,
        defaultValue: 'none'
    },
    description: {
        type: Sequelize.TEXT
    }
}, {
    tableName: 'product_description',
    timestamps: false
});

const Img = require('./Img');
ProductDescription.hasMany(Img,{as: 'Images',foreignKey: 'product_description_id'});

module.exports = ProductDescription;
