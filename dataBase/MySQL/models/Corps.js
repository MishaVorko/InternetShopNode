'use strict';

module.exports = (sequelize, DataTypes) => {
    const Corps = sequelize.define('Corps', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        protection_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        material_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        height: {
            type: DataTypes.DECIMAL(5, 1)
        },
        width: {
            type: DataTypes.DECIMAL(5, 1)
        },
        depth: {
            type: DataTypes.DECIMAL(3, 1)
        },
        weight: {
            type: DataTypes.INTEGER
        }

    }, {
        tableName: 'corps',
        timestamps: false
    });

    const Protection = sequelize.import('./CorpsProtectionGroup.js');
    const Material =  sequelize.import('./CorpsMaterial.js');

    Corps.belongsTo(Protection, {as: 'CorpsProtection', foreignKey: 'protection_id'});
    Corps.belongsTo(Material, {as: 'CorpsMaterial', foreignKey: 'material_id'});

    return Corps
};
