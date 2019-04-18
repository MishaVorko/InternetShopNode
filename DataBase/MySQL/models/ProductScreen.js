'use strict';
const {sequelize, Sequelize} = require('../index');

const ProductScreen = sequelize.define('ProductScreen', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    diagonal: {
        type: Sequelize.DECIMAL(4,1),
        defaultValue: 0.0
    },
    resolution_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    type_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    protective_glass: {
        type: Sequelize.STRING,
        defaultValue: 'none'
    }
}, {
    tableName: 'product_screen',
    timestamps: false
});

const Resolution = require('./ResolutionVideo');
const Type = require('./ProductScreenType');

ProductScreen.belongsTo(Resolution, {foreignKey: 'resolution_id'});
ProductScreen.belongsTo(Type, {foreignKey: 'type_id'});

module.exports = ProductScreen;
