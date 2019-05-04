'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProductScreen = sequelize.define('ProductScreen', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        diagonal: {
            type: DataTypes.DECIMAL(4, 1),
            defaultValue: 0.0
        },
        resolution_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        type_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        protective_glass: {
            type: DataTypes.STRING,
            defaultValue: 'none'
        }
    }, {
        tableName: 'product_screen',
        timestamps: false
    });

    const Resolution = sequelize.import('./ResolutionVideo.js');
    const Type = sequelize.import('./ProductScreenType.js');

    ProductScreen.belongsTo(Resolution, {as: 'Resolution', foreignKey: 'resolution_id'});
    ProductScreen.belongsTo(Type, {as: 'ScreenType', foreignKey: 'type_id'});

    return ProductScreen
};
