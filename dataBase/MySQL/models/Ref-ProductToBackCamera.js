'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProductToBackCamera = sequelize.define('ProductToBackCamera', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_details_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        back_camera_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }

    }, {
        tableName: 'ref_product_back_camera',
        timestamps: false
    });


    const BackCamera = sequelize.import('./BackCamera.js');
    const ProductDetails = sequelize.import('./ProductDetails.js');

    ProductDetails.belongsToMany(BackCamera, {
        as: 'BackCamera',
        through: ProductToBackCamera,
        foreignKey: 'product_details_id'
    });
    BackCamera.belongsToMany(ProductDetails, {
        through: ProductToBackCamera,
        foreignKey: 'back_camera_id'
    });

    return ProductToBackCamera
};
