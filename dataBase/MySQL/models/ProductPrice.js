

module.exports = (sequelize, Sequelize) => {
    const ProductPrice = sequelize.define('Price', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        },
        currency: {
            type: Sequelize.STRING,
            defaultValue: 'USD'
        },
        discount: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {
        tableName: 'product_price',
        timestamps: false
    });

    return ProductPrice
};
