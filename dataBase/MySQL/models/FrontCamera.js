'use strict';

module.exports = (sequelize, DataTypes) => {
    const FrontCamera = sequelize.define('FrontCamera', {
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
        }
    }, {
        tableName: 'front_camera',
        timestamps: false
    });

    return FrontCamera
};
