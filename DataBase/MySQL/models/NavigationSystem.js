'use strict';
const {sequelize, Sequelize} = require('../index');

const NavigationSystem = sequelize.define('NavigationSystem', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    system: {
        type: Sequelize.STRING
    }
    
}, {
    tableName: 'navigation_system',
    timestamps: false
});

module.exports = NavigationSystem;
