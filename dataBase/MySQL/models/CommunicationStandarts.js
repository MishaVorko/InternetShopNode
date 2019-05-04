'use strict';

module.exports = (sequelize, DataTypes) => {
    const ComStandarts = sequelize.define('CommunicationStandarts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        standarts: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'communication_standarts',
        timestamps: false
    });

    return ComStandarts
};
