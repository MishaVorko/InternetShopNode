'use strict';

module.exports = (sequelize, DataTypes) => {
    const Communication = sequelize.define('Communication', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        amount_sim: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        type_sim: {
            type: DataTypes.STRING,
            defaultValue: 'Nano-SIM'
        }
    }, {
        tableName: 'communication',
        timestamps: false
    });

    return Communication
};
