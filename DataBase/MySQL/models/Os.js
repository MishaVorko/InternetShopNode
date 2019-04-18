'use strict';
const {sequelize, Sequelize} = require('../index');

const Os = sequelize.define('Os', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    type: {
        type: Sequelize.STRING
    }

}, {
    tableName: 'os',
    timestamps: false
});

module.exports = Os;
