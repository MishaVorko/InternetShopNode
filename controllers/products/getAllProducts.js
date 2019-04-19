//******Require database models******
const ProductsModel = require('../../DataBase/MySQL/models/Products');
const ProductPriceModel = require('../../DataBase/MySQL/models/ProductPrice');
const ProductDetails = require('../../DataBase/MySQL/models/ProductDetails');
const ProductDescriptionModel = require('../../DataBase/MySQL/models/ProductDescription');
const ColorsModel = require('../../DataBase/MySQL/models/Colors');
const RefProdColorModel = require('../../DataBase/MySQL/models/Ref-ProductToColor');

module.exports = async (req, res, next) => {
    try {
        let data = await ProductsModel.findAll({
            attributes: ['model'],
            include:[{
                association: 'Details',
                attributes: ['screen_id']
            }]

        });
        res.json(data);

    }catch (err) {
        res.json(err.message);
    }


};
