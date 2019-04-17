'use strict';
const {sequelize, Sequelize} = require('../index');

const Communication = sequelize.define('Communication', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    amount_sim: {
        type: Sequelize.INTEGER,
        defaultValue: 1
    },
    type_sim:{
        type: Sequelize.STRING,
        defaultValue: 'Nano-SIM'
    }
}, {
    tableName: 'communication',
    timestamps: false
});

module.exports = Communication;
