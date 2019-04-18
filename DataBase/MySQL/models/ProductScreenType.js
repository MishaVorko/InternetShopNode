'use strict';
const {sequelize, Sequelize} = require('../index');

const ScreenType = sequelize.define('ScreenType', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type:Sequelize.STRING
    }

}, {
    tableName: 'product_screen_type',
    timestamps: false
});

module.exports = ScreenType;
