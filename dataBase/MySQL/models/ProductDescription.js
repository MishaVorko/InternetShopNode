'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProductDescription = sequelize.define('ProductDescription', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        short_description: {
            type: DataTypes.STRING,
            defaultValue: 'none'
        },
        description: {
            type: DataTypes.TEXT
        }
    }, {
        tableName: 'product_description',
        timestamps: false
    });

    const Img = sequelize.import('./Img.js');
    ProductDescription.hasMany(Img, {as: 'Images', foreignKey: 'product_description_id'});

    return ProductDescription
};
