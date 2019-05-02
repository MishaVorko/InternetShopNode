const ControllerError = require('../../errors/ControllerError');

//******Require database models******
const ProductsModel = require('../../DataBase/MySQL/models/Products');
const RefProductColorModel = require('../../DataBase/MySQL/models/Ref-ProductToColor');


module.exports = async (req, res, next) => {
    try {

        if (!req.params.id) throw new ControllerError('Bad request. Bad products id', 400);

        let data = await ProductsModel.findOne({
            attributes: ['id', 'brand', 'model', 'type', 'description_id', 'price_id'],
            where: {
                id: req.params.id
            },
            include: [
                {
                    association: 'Price',
                    attributes: ['price', 'currency', 'discount']
                }, {
                    association: 'Description',
                    attributes: ['short_description'],
                    include: [{
                        association: 'Images',
                        attributes: ['place']
                    }]
                }, {
                    association: 'Colors',
                    through: {
                        model: RefProductColorModel,
                        attributes: [],
                    },
                    attributes: ['name'],
                }
            ]
        });

        if (!data) throw new ControllerError('Can`t give product', 500);
        res.json({
            success: true,
            data
        });

    } catch (err) {
        next(err);
    }
};
