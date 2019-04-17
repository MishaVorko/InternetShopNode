'use strict';
const {sequelize, Sequelize} = require('../index');

const CommunicationStandarts = sequelize.define('CommunicationStandarts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    standarts: {
        type: Sequelize.STRING
    }
}, {
    tableName: 'communication_standarts',
    timestamps: false
});

module.exports = CommunicationStandarts;
