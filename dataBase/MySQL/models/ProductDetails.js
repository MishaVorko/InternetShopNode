'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProductDetails = sequelize.define('ProductDetails', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        screen_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        communication_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        os_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        processor_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        memory_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        connectors_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        interfaces_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        battery_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        corps_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        additional_features: {
            type: DataTypes.INTEGER
        }
    }, {
        tableName: 'product_details',
        timestamps: false
    });

    const Screen = sequelize.import('./ProductScreen.js');
    const Communication = sequelize.import('./Communication.js');
    const Os = sequelize.import('./Os.js');
    const Processor = sequelize.import('./Processors.js');
    const Memory = sequelize.import('./Memory.js');
    const Connectors = sequelize.import('./ConnectorsGroups.js');
    const Interfaces = sequelize.import('./Interfaces.js');
    const Battery = sequelize.import('./Battery.js');
    const Corps = sequelize.import('./Corps.js');

    ProductDetails.belongsTo(Screen, {as: 'Screen', foreignKey: 'screen_id'});
    ProductDetails.belongsTo(Communication, {as: 'Communication', foreignKey: 'communication_id'});
    ProductDetails.belongsTo(Os, {as: 'Os', foreignKey: 'os_id'});
    ProductDetails.belongsTo(Processor, {as: 'Processor', foreignKey: 'processor_id'});
    ProductDetails.belongsTo(Memory, {as: 'Memory', foreignKey: 'memory_id'});
    ProductDetails.belongsTo(Connectors, {as: 'ConnectorsGroup', foreignKey: 'connectors_id'});
    ProductDetails.belongsTo(Interfaces, {as: 'Interfaces', foreignKey: 'interfaces_id'});
    ProductDetails.belongsTo(Battery, {as: 'Battery', foreignKey: 'battery_id'});
    ProductDetails.belongsTo(Corps, {as: 'Corps', foreignKey: 'corps_id'});

    return ProductDetails
};
