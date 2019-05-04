'use strict';

module.exports = (sequelize, DataTypes) => {
    const BackCamera = sequelize.define('BackCamera', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        pixels: {
            type: DataTypes.DECIMAL(3, 1),
            defaultValue: 0.0
        },
        flash: {
            type: DataTypes.BOOLEAN,
            defaultValue: 1
        },
        resolution_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'back_camera',
        timestamps: false
    });

    const Resolution = sequelize.import('./ResolutionVideo.js');
    BackCamera.belongsTo(Resolution, {as: 'ResolutionBackCam', foreignKey: 'resolution_id'});

    return BackCamera
};
