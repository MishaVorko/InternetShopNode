const ControllerError = require('../../errors/ControllerError');
const MySqlDatabase = require('../../dataBase/MySQL').getInstance();


module.exports = async (req, res, next) => {
    try {
        //******Require database models******
        const DetailsModel = MySqlDatabase.getModel('ProductDetails');
        const ProductsModel = MySqlDatabase.getModel('Products');
        const RefProdDetailsNavSystem = MySqlDatabase.getModel('Ref-ProductDetailsToNavSystem');
        const RefProdDetailsBackCamera = MySqlDatabase.getModel('Ref-ProductToBackCamera');
        const RefProdDetailsCommunication = MySqlDatabase.getModel('Ref-ProductToCommunicationStandarts');
        const RefProdDetailsFrontCamera = MySqlDatabase.getModel('Ref-ProductToFrontCamera');


        if (!req.body) throw new ControllerError('Bad request. Bad req data', 400);

        let statusMessages = {};
        let data;
        let temporalData = {};

        /*
        * Price
        * Images
        * Screen
        * - Resolution
        * - ScreenType
        * Communication
        * Os
        * Processor
        * Memory
        * - MemoryExpansion
        * ConnectorsGroup
        * Interfaces
        * Battery
        * Corps
        * - CorpsProtection
        * - CorpsMaterial
        *
        * RefProdDetailsNavSystem + NavSystem
        * RefProdDetailsBackCamera + BackCamera
        * RefProdDetailsCommunication + CommStandarts
        * RefProdDetailsFrontCamera + FrontCamera
        *
        *
        * RefProductColorModel + Color
        *  */


        //*****Create Product*****
        if (req.body.Created === 'product') {
            if (!req.body.brand || !req.body.model) throw new ControllerError('Bad request. Bad req data for create product', 500);

            await DetailsModel.findOrCreate({
                where: {
                    screen_id: req.body.screen_id,
                    communication_id: req.body.communication_id,
                    os_id: req.body.os_id,
                    processor_id: req.body.processor_id,
                    memory_id: req.body.memory_id,
                    connectors_id: req.body.connectors_id,
                    interfaces_id: req.body.interfaces_id,
                    battery_id: req.body.battery_id,
                    corps_id: req.body.corps_id,
                    additional_features: req.body.additional_features
                }
            }).then( data => {
                temporalData.detailsId = data[0].dataValues.id;
            });

            if (!temporalData.detailsId) throw new ControllerError('Create details error', 500);


            data = await ProductsModel.findOrCreate({
                where: {
                    brand: req.body.brand,
                    model: req.body.model,
                    price_id: req.body.price_id,
                    country: req.body.country,
                    warranty_period: req.body.warranty_period,
                    equipment: req.body.equipment,
                    details_id: temporalData.detailsId,
                    description_id: req.body.description_id
                },
                defaults: {
                    type: 'smartphone'
                }
            });

            if (!data) throw new ControllerError('Product create error', 500);
            else  statusMessages.product = 'Product is create';
        }

        //***ColorsRef
        // await RefProductColorModel.create({
        //     color_id: req.body.color_id,
        //     product_id: req.body.color_id
        // }, {}).then(data => {
        //     console.log(data);
        // });

        //*****End Create Product*****


        if (!data) throw new ControllerError('Server error', 500);

        res.json({
            success: true,
            statusMessages,
            data
        });

    } catch (err) {
        next(err);
    }
};
