'use strict';

module.exports = (sequelize, DataTypes) => {
    const ConnectorsGroups = sequelize.define('ConnectorsGroups', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        usb_type: {
            type: DataTypes.STRING
        },
        connector: {
            type: DataTypes.STRING,
            defaultValue: 'none'
        }
    }, {
        tableName: 'connectors_groups',
        timestamps: false
    });

    return ConnectorsGroups
};
