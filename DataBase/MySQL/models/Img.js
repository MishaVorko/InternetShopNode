'use strict';
const {sequelize, Sequelize} = require('../index');

const Img = sequelize.define('Img', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    place: {
        type: Sequelize.STRING
    },
    size: {
        type: Sequelize.STRING
    },
    client_screen_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    product_description_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }

}, {
    tableName: 'img',
    timestamps: false
});

const ClientScreen = require('./ClientScreen');

Img.belongsTo(ClientScreen, {as: 'ClientScreen', foreignKey: 'client_screen_id'});

module.exports = Img;
