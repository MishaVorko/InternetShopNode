'use strict';

module.exports = (sequelize, DataTypes) => {
    const ClientScreen = sequelize.define('ClientScreen', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        screen_size: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'client_screen',
        timestamps: false
    });

    return ClientScreen
};
