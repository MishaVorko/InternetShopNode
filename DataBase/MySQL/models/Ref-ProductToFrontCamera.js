'use strict';
const {sequelize, Sequelize} = require('../index');

const ProductToFrontCamera = sequelize.define('ProductToFrontCamera', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_details_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    front_camera_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }

}, {
    tableName: 'ref_product_front_camera',
    timestamps: false
});


const ProductDetails = require('./ProductDetails');
const FrontCamera = require('./FrontCamera');

ProductDetails.belongsToMany(FrontCamera, {
    as: 'FrontCamera',
    through: ProductToFrontCamera,
    foreignKey: 'product_details_id'
});
FrontCamera.belongsToMany(ProductDetails, {
    through: ProductToFrontCamera,
    foreignKey: 'front_camera_id'
});

module.exports = ProductToFrontCamera;
