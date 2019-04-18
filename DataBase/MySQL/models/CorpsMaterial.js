'use strict';
const {sequelize, Sequelize} = require('../index');

const CorpsMaterial = sequelize.define('CorpsMaterial', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    material: {
        type: Sequelize.STRING
    }
}, {
    tableName: 'corps_material',
    timestamps: false
});

module.exports = CorpsMaterial;
