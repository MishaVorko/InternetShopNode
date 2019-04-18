'use strict';
const {sequelize, Sequelize} = require('../index');

const ProductToBackCamera = sequelize.define('ProductToBackCamera', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_details_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    back_camera_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }

}, {
    tableName: 'ref_product_back_camera',
    timestamps: false
});

module.exports = ProductToBackCamera;
