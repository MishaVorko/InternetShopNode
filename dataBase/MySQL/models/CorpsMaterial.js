'use strict';

module.exports = (sequelize, DataTypes) => {
    const CorpsMaterial = sequelize.define('CorpsMaterial', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        material: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'corps_material',
        timestamps: false
    });

    return CorpsMaterial
};
