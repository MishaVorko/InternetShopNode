'use strict';

module.exports = (sequelize, DataTypes) => {
    const Processors = sequelize.define('Processors', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        model: {
            type: DataTypes.STRING
        },
        sum_core: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        cpu_frequency: {
            type: DataTypes.DECIMAL(5, 2),
            defaultValue: 0.00
        },
        gpu_model: {
            type: DataTypes.STRING
        }

    }, {
        tableName: 'processors',
        timestamps: false
    });

    return Processors
};
