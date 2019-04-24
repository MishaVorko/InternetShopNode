const ControllerError = require('../../errors/ControllerError');

//******Require database models******
const ProductsModel = require('../../DataBase/MySQL/models/Products');


module.exports = async (req, res, next) => {
    try {
        let data = await ProductsModel.findAll({
            attributes: ['brand', 'model', 'type', 'country', 'warranty_period', 'equipment'],
            include:[{
                association: 'Details',
                attributes: []
            }, {
                association: 'Price',
                attributes: ['price', 'currency', 'discount']
            }, {
                association: 'Description',
                attributes: ['short_description', 'description']
            }]

        });

        if(!data) throw new Error('Can`t give message');
        res.json(data);

    }catch (err) {
        next(new ControllerError(err.message , 500));
    }


};
