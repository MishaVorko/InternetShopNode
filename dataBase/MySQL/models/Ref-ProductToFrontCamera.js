'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProductToFrontCamera = sequelize.define('ProductToFrontCamera', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_details_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        front_camera_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }

    }, {
        tableName: 'ref_product_front_camera',
        timestamps: false
    });


    const ProductDetails = sequelize.import('./ProductDetails.js');
    const FrontCamera = sequelize.import('./FrontCamera.js');

    ProductDetails.belongsToMany(FrontCamera, {
        as: 'FrontCamera',
        through: ProductToFrontCamera,
        foreignKey: 'product_details_id'
    });
    FrontCamera.belongsToMany(ProductDetails, {
        through: ProductToFrontCamera,
        foreignKey: 'front_camera_id'
    });

    return ProductToFrontCamera
};
