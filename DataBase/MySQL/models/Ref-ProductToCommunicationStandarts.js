'use strict';
const {sequelize, Sequelize} = require('../index');

const ProductToComStandarts = sequelize.define('ProductToComStandarts', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    product_details_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    communication_standarts_id: {
        type: Sequelize.INTEGER,
        foreignKey: true
    }

}, {
    tableName: 'ref_prod_communication_standarts',
    timestamps: false
});


const ProductDetails = require('./ProductDetails');
const ComStandarts = require('./CommunicationStandarts');

ProductDetails.belongsToMany(ComStandarts, {
    as: 'CommStandarts',
    through: ProductToComStandarts,
    foreignKey: 'product_details_id'
});
ComStandarts.belongsToMany(ProductDetails, {
    through: ProductToComStandarts,
    foreignKey: 'communication_standarts_id'
});

module.exports = ProductToComStandarts;
