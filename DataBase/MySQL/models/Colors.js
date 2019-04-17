'use strict';
const {sequelize, Sequelize} = require('../index');

const Colors = sequelize.define('Colors', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING
    }
},{
    tableName: 'colors',
    timestamps: false
});

module.exports = Colors;
