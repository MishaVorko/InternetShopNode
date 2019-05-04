'use strict';

module.exports = (sequelize, DataTypes) => {
    const ProductToComStandarts = sequelize.define('ProductToComStandarts', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_details_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        },
        communication_standarts_id: {
            type: DataTypes.INTEGER,
            foreignKey: true
        }

    }, {
        tableName: 'ref_prod_communication_standarts',
        timestamps: false
    });


    const ProductDetails = sequelize.import('./ProductDetails.js');
    const ComStandarts = sequelize.import('./CommunicationStandarts.js');

    ProductDetails.belongsToMany(ComStandarts, {
        as: 'CommStandarts',
        through: ProductToComStandarts,
        foreignKey: 'product_details_id'
    });
    ComStandarts.belongsToMany(ProductDetails, {
        through: ProductToComStandarts,
        foreignKey: 'communication_standarts_id'
    });

    return ProductToComStandarts
};
