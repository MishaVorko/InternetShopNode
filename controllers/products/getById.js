const ControllerError = require('../../errors/ControllerError');
const MySqlDatabase = require('../../dataBase/MySQL/index').getInstance();

module.exports = async (req, res, next) => {
    try {
        //******Require database models******
        const RefProductColors = MySqlDatabase.getModel('Ref-ProductToColor');
        const ProductsModel = MySqlDatabase.getModel('Products');
        const RefProdDetailsNavSystem = MySqlDatabase.getModel('Ref-ProductDetailsToNavSystem');
        const RefProdDetailsBackCamera = MySqlDatabase.getModel('Ref-ProductToBackCamera');
        const RefProdDetailsCommunication = MySqlDatabase.getModel('Ref-ProductToCommunicationStandarts');
        const RefProdDetailsFrontCamera = MySqlDatabase.getModel('Ref-ProductToFrontCamera');

        if (!req.params.id) throw new ControllerError('Bad request. Bad products id', 400);
        if (!RefProductColors) throw new ControllerError('Bad', 400);

        let data = await ProductsModel.findOne({
            attributes: ['id', 'brand', 'model', 'type', 'price_id',
                'country', 'warranty_period', 'equipment', 'description_id'],
            where: {
                id: req.params.id
            },
            include: [
                {
                    association: 'Price',
                    attributes: ['price', 'currency', 'discount']
                },
                {
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
                            association: 'Screen',
                            attributes: ['diagonal', 'protective_glass'],
                            include: [
                                {
                                    association: 'Resolution',
                                    attributes: ['resolution']
                                }, {
                                    association: 'ScreenType',
                                    attributes: ['type']
                                }
                            ]
                        }, {
                            association: 'Communication',
                            attributes: ['amount_sim', 'type_sim']
                        }, {
                            association: 'Os',
                            attributes: ['type']
                        }, {
                            association: 'Processor',
                            attributes: ['model', 'sum_core', 'cpu_frequency', 'gpu_model']
                        }, {
                            association: 'Memory',
                            attributes: ['ram', 'internal_memory'],
                            include: [
                                {
                                    association: 'MemoryExpansion',
                                    attributes: ['expansion']
                                }
                            ]
                        }, {
                            association: 'ConnectorsGroup',
                            attributes: ['usb_type', 'connector']
                        }, {
                            association: 'Interfaces',
                            attributes: ['wifi_type_id', 'bluetooth', 'nfs', 'fm_tuner']
                        }, {
                            association: 'Battery',
                            attributes: ['capacity']
                        }, {
                            association: 'Corps',
                            attributes: ['height', 'width', 'depth', 'weight'],
                            include: [
                                {
                                    association: 'CorpsProtection',
                                    attributes: ['protection']
                                }, {
                                    association: 'CorpsMaterial',
                                    attributes: ['material']
                                }
                            ]
                        }, {
                            association: 'NavigateSystem',
                            through: {
                                model: RefProdDetailsNavSystem,
                                attributes: [],
                            },
                            attributes: ['system']
                        }, {
                            association: 'BackCamera',
                            through: {
                                model: RefProdDetailsBackCamera,
                                attributes: []
                            },
                            attributes: ['quantity', 'pixels', 'flash'],
                            include: [
                                {
                                    association: 'ResolutionBackCam',
                                    attributes: ['resolution']
                                }
                            ]
                        }, {
                            association: 'CommStandarts',
                            through: {
                                model: RefProdDetailsCommunication,
                                attributes: []
                            },
                            attributes: ['standarts']
                        }, {
                            association: 'FrontCamera',
                            through: {
                                model: RefProdDetailsFrontCamera,
                                attributes: []
                            },
                            attributes: ['quantity', 'pixels', 'flash']
                        }, {
                            association: 'Colors',
                            through: {
                                model: RefProductColors,
                                attributes: []
                            },
                            attributes: ['name']
                        }
                    ]
                }
            ]
        });

        if (!data) throw new ControllerError('Server error. Can`t give product', 500);
        res.json({
            success: true,
            data
        });

    } catch (err) {
        next(err);
    }
};
