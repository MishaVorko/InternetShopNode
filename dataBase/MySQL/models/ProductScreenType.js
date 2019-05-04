'use strict';

module.exports = (sequelize, DataTypes) => {
    const ScreenType = sequelize.define('ScreenType', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'product_screen_type',
        timestamps: false
    });

    return ScreenType
};
