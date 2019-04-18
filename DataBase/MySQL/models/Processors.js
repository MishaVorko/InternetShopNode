'use strict';
const {sequelize, Sequelize} = require('../index');

const Processors = sequelize.define('Processors', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    model: {
        type: Sequelize.STRING
    },
    sum_core: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    cpu_frequency: {
        type: Sequelize.DECIMAL(5,2),
        defaultValue: 0.00
    },
    gpu_model: {
        type: Sequelize.STRING
    }

}, {
    tableName: 'processors',
    timestamps: false
});

module.exports = Processors;
