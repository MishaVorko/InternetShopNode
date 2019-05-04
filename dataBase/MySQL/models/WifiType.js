'use strict';

module.exports = (sequelize, DataTypes) => {
    const WifiType = sequelize.define('WifiType', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING
        }

    }, {
        tableName: 'wifi_type',
        timestamps: false
    });

    return WifiType
};
