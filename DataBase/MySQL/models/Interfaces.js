'use strict';
const {sequelize, Sequelize} = require('../index');

const Interfaces = sequelize.define('Interfaces', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    wifi_type_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    bluetooth: {
        type: Sequelize.STRING
    },
    nfs: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    },
    fm_tuner: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
    }

}, {
    tableName: 'interfaces',
    timestamps: false
});

module.exports = Interfaces;
