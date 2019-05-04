'use strict';

module.exports = (sequelize, DataTypes) => {
    const MemoryExpansion = sequelize.define('MemoryExpansion', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        expansion: {
            type: DataTypes.STRING
        }

    }, {
        tableName: 'memory_expansion',
        timestamps: false
    });

    return MemoryExpansion
};
