'use strict';
const {sequelize, Sequelize} = require('../index');

const FrontCamera = sequelize.define('FrontCamera', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    pixels: {
        type: Sequelize.DECIMAL(3,1),
        defaultValue: 0.0
    },
    flash: {
        type: Sequelize.BOOLEAN,
        defaultValue: 1
    }
}, {
    tableName: 'front_camera',
    timestamps: false
});

module.exports = FrontCamera;
