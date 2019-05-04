'use strict';

module.exports = (sequelize, DataTypes) => {
    const Os = sequelize.define('Os', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING
        }

    }, {
        tableName: 'os',
        timestamps: false
    });

    return Os
};
