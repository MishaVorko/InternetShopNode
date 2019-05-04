'use strict';

module.exports = (sequelize, DataTypes) => {
    const Img = sequelize.define('Img', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        place: {
            type: DataTypes.STRING
        },
        size: {
            type: DataTypes.STRING
        },
        client_screen_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        product_description_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }

    }, {
        tableName: 'img',
        timestamps: false
    });

    const ClientScreen = sequelize.import('./ClientScreen.js');

    Img.belongsTo(ClientScreen, {as: 'ClientScreen', foreignKey: 'client_screen_id'});

    return Img
};
