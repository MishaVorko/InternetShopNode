'use strict';

module.exports = (sequelize, DataTypes) => {
    const NavigationSystem = sequelize.define('NavigationSystem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        system: {
            type: DataTypes.STRING
        }

    }, {
        tableName: 'navigation_system',
        timestamps: false
    });

    return NavigationSystem
};
