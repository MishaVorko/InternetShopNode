'use strict';
const {sequelize, Sequelize} = require('../index');

const ConnectorsGroups = sequelize.define('ConnectorsGroups', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usb_type: {
        type: Sequelize.STRING
    },
    connector: {
        type: Sequelize.STRING,
        defaultValue: 'none'
    }
}, {
    tableName: 'connectors_groups',
    timestamps: false
});

module.exports = ConnectorsGroups;
