'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProductToColor = sequelize.define('ProductColors', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        color_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        product_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }

    }, {
        tableName: 'ref_prod_color',
        timestamps: false
    });


    const ProductDetails = sequelize.import('./ProductDetails.js');
    // const Products = sequelize.import('./Products.js');
    const Colors = sequelize.import('./Colors.js');

    ProductDetails.belongsToMany(Colors, {
        as: 'Colors',
        through: ProductToColor,
        foreignKey: 'product_id'
    });
    Colors.belongsToMany(ProductDetails, {
        through: ProductToColor,
        foreignKey: 'color_id'
    });
    return ProductToColor
};
