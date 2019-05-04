'use strict';

module.exports = (sequelize, DataTypes) => {
    const Interfaces = sequelize.define('Interface', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        wifi_type_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        bluetooth: {
            type: DataTypes.STRING
        },
        nfs: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        },
        fm_tuner: {
            type: DataTypes.BOOLEAN,
            defaultValue: 0
        }

    }, {
        tableName: 'interfaces',
        timestamps: false
    });

    const WifiType = sequelize.import('./WifiType.js');

    Interfaces.belongsTo(WifiType, {foreignKey: 'wifi_type_id'});

    return Interfaces
};
