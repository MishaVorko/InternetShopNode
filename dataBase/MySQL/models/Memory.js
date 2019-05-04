'use strict';

module.exports = (sequelize, DataTypes) => {
    const Memory = sequelize.define('Memory', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        ram: {
            type: DataTypes.INTEGER
        },
        internal_memory: {
            type: DataTypes.INTEGER
        },
        expansion_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }

    }, {
        tableName: 'memory',
        timestamps: false
    });

    const Expansion = sequelize.import('./MemoryExpansion.js');
    Memory.belongsTo(Expansion, {as: 'MemoryExpansion', foreignKey: 'expansion_id'});

    return Memory
};
