'use strict';

module.exports = (sequelize, DataTypes) => {
    const Products = sequelize.define('Products', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        brand: {
            type: DataTypes.STRING
        },
        model: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        price_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        country: {
            type: DataTypes.STRING,
            defaultValue: 'none'
        },
        warranty_period: {
            type: DataTypes.STRING,
            defaultValue: 'none'
        },
        equipment: {
            type: DataTypes.STRING,
            defaultValue: 'none'
        },
        details_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        description_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        timestamps: false,
        tableName: 'products'
    });

    const Price = sequelize.import('./ProductPrice.js');
    const Details = sequelize.import('./ProductDetails.js');
    const Description = sequelize.import('./ProductDescription.js');

    Products.belongsTo(Price, {as: 'Price', foreignKey: 'price_id'});
    Products.belongsTo(Details, {as: 'Details', foreignKey: 'details_id'});
    Products.belongsTo(Description, {as: 'Description', foreignKey: 'description_id'});

    return Products
};
