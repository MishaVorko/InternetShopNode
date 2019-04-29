const ControllerError = require('../../errors/ControllerError');

//******Require database models******
const ProductsModel = require('../../DataBase/MySQL/models/Products');
const ImgModel = require('../../DataBase/MySQL/models/Img');


module.exports = async (req, res, next) => {
    try {

        let data = await ProductsModel.findAll({
            attributes: ['brand', 'model'],
            include: [
                {
                association: 'Price',
                attributes: ['price', 'currency', 'discount']
            },
                {
                association: 'Description',
                attributes: ['short_description'],
                // include: [{
            //         model: ImgModel,
            //         as: 'Images',
            //         attributes: ['place']
            // //         include: [{
            // //             association: 'ClientScreen',
            // //             attributes: ['screen_size']
            // //         }]
            //     }]
            }
            ],
            offset: 0,
            limit: 2
        });

        if (!data) throw new ControllerError('Can`t give message', 500);
        res.json(data);

    } catch (err) {
        next(err);
    }


};
