'use strict';
const {sequelize, Sequelize} = require('../index');

const ProductDetails = sequelize.define('ProductDetails', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    screen_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    communication_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    os_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    processor_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    memory_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    connectors_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    interfaces_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    battery_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    corps_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    additional_features: {
        type: Sequelize.INTEGER
    }
},{
    tableName: 'product_details',
    timestamps: false
});

const Screen = require('./ProductScreen');
const Communication = require('./Communication');
const Os = require('./Os');
const Processor = require('./Processors');
const Memory = require('./Memory');
const Connectors = require('./ConnectorsGroups');
const Interfaces = require('./Interfaces');
const Battery = require('./Battery');
const Corps = require('./Corps');

ProductDetails.belongsTo(Screen, {foreignKey: 'screen_id'});
ProductDetails.belongsTo(Communication, {foreignKey: 'communication_id'});
ProductDetails.belongsTo(Os, {foreignKey: 'os_id'});
ProductDetails.belongsTo(Processor, {foreignKey: 'processor_id'});
ProductDetails.belongsTo(Memory, {foreignKey: 'memory_id'});
ProductDetails.belongsTo(Connectors, {foreignKey: 'connectors_id'});
ProductDetails.belongsTo(Interfaces, {foreignKey: 'interfaces_id'});
ProductDetails.belongsTo(Battery, {foreignKey: 'battery_id'});
ProductDetails.belongsTo(Corps, {foreignKey: 'corps_id'});


module.exports = ProductDetails;
