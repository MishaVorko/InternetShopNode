const ControllerError = require('../../errors/ControllerError');
const Op = require('sequelize').Op;
const MySqlDatabase = require('../../dataBase/MySQL').getInstance();


module.exports = async (req, res, next) => {
    try {

        //******Require database models******
        const ProductsModel = MySqlDatabase.getModel('Products');
        const RefProductColors = MySqlDatabase.getModel('Ref-ProductToColor');


        let page = +req.params.page;
        let searchStr = req.params.search_string;
        let color = req.params.color;
        let brand = "" + req.params.brand;
        let priceMin = +req.params.min_price;
        let priceMax = +req.params.max_price;

        if (typeof +req.params.limit != "number" || +req.params.limit > 100) throw new ControllerError('Bad request. Bad page limit', 400);
        else if (searchStr.match(/[^\.а-яА-Яa-zA-Zа-яА-Я0-9]/)) throw new ControllerError('Bad request. Bad search text', 400);
        else if (color.match(/[^-\.\іа-яА-Яa-zA-Zа-яА-Я0-9]/)) throw new ControllerError('Bad request. Bad color text', 400);
        else if (brand.match(/[^-\.а-яА-Яa-zA-Zа-яА-Я0-9]/)) throw new ControllerError('Bad request. Bad brand text', 400);

        if (searchStr === 'all' && brand === 'all') searchStr = '';
        if (color === 'all') color = '';
        if (brand !== 'all' && searchStr === 'all') searchStr = brand;
        if (!page) page = 1;
        if (!priceMin || priceMin < 0) priceMin = 0;
        if (!priceMax || priceMax <= 0 || priceMax < priceMin) priceMax = priceMin + 10;


        let data = await ProductsModel.findAndCountAll({
            attributes: ['id', 'brand', 'model', 'type', 'description_id', 'price_id'],
            include: [
                {
                    association: 'Price',
                    attributes: ['price', 'currency', 'discount'],
                    where: {
                        price: {
                            [Op.between]: [priceMin, priceMax]
                        }
                    }
                }, {
                    association: 'Description',
                    attributes: ['short_description'],
                    include: [
                        {
                            association: 'Images',
                            attributes: ['place']
                        }
                    ]
                }, {
                    association: 'Details',
                    attributes: ['id'],
                    include: [
                        {
                            association: 'Colors',
                            through: {
                                model: RefProductColors,
                                attributes: [],
                            },
                            attributes: ['name'],
                            where: {
                                name: {
                                    [Op.like]: `%${color}%`
                                }
                            }
                        }
                    ]
                }
            ],
            where: {
                [Op.or]: [{
                    brand: {
                        [Op.like]: `%${searchStr}%`
                    }
                }, {
                    model: {
                        [Op.like]: `%${searchStr}%`
                    }
                }]
            },
            offset: (+req.params.page - 1) * +req.params.limit,
            limit: +req.params.limit,
            group: 'products.id'
        });

        if (!data) throw new ControllerError('Server error. Can`t give products', 500);

        res.json({
            success: true,
            rowsCount: data.count.length,
            data: data.rows
        });

    } catch (err) {
        next(err);
    }


};
