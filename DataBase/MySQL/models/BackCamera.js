'use strict';
const {sequelize, Sequelize} = require('../index');

const BackCamera = sequelize.define('BackCamera', {
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
    },
    resolution_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }
}, {
    tableName: 'back_camera',
    timestamps: false
});

const Resolution = require('./ResolutionVideo');
BackCamera.belongsTo(Resolution,{foreignKey: 'resolution_id'});

module.exports = BackCamera;
