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

module.exports = ProductToFrontCamera;
