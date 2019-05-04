'use strict';

module.exports = (sequelize, DataTypes) => {
    const Battery = sequelize.define('Battery', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        capacity: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        tableName: 'battery',
        timestamps: false
    });

    return Battery
};
