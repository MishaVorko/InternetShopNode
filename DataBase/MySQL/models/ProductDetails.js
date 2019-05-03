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

ProductDetails.belongsTo(Screen, {as: 'Screen', foreignKey: 'screen_id'});
ProductDetails.belongsTo(Communication, {as: 'Communication', foreignKey: 'communication_id'});
ProductDetails.belongsTo(Os, {as: 'Os', foreignKey: 'os_id'});
ProductDetails.belongsTo(Processor, {as: 'Processor', foreignKey: 'processor_id'});
ProductDetails.belongsTo(Memory, {as: 'Memory', foreignKey: 'memory_id'});
ProductDetails.belongsTo(Connectors, {as: 'ConnectorsGroup', foreignKey: 'connectors_id'});
ProductDetails.belongsTo(Interfaces, {as: 'Interfaces', foreignKey: 'interfaces_id'});
ProductDetails.belongsTo(Battery, {as: 'Battery', foreignKey: 'battery_id'});
ProductDetails.belongsTo(Corps, {as: 'Corps', foreignKey: 'corps_id'});


module.exports = ProductDetails;
