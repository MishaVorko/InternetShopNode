'use strict';

module.exports = (sequelize, DataTypes) => {
    const CorpsProtection = sequelize.define('CorpsProtection', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        protection: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'corps_protection_group',
        timestamps: false
    });

    return CorpsProtection
};
