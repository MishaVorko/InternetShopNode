'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProductDetailsToNavSystem = sequelize.define('ProductDetailsToNavSystem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        products_details_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        nav_system_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }

    }, {
        tableName: 'ref_product_details_nav_system',
        timestamps: false
    });

    const ProductDetails = sequelize.import('./ProductDetails.js');
    const NavSystem = sequelize.import('./NavigationSystem.js');

    NavSystem.belongsToMany(ProductDetails, {
        through: ProductDetailsToNavSystem,
        foreignKey: 'nav_system_id'
    });
    ProductDetails.belongsToMany(NavSystem, {
        as: 'NavigateSystem',
        through: ProductDetailsToNavSystem,
        foreignKey: 'products_details_id'
    });

    return ProductDetailsToNavSystem
};
