const ControllerError = require('../../errors/ControllerError');
const MySqlDatabase = require('../../dataBase/MySQL').getInstance();


// Data for product must named - NewProduct, data for other table must named - OtherTableData
// Objects NewProduct and OtherTableData consist of objects that describe the table and named like SQL table name
// Objects that describe tables should have fields that match the fields of the desired SQL table

//this function accepts objects: NewProduct or OtherTableData and returns the table data if it succeeds
async function createRow(ProductData){
    let tempolarData = {};
    let data = {};

    for(key in ProductData){
        let rowData = ProductData[`${key}`];
        const Model = MySqlDatabase.getModel(`${key}`);

        if(key === 'Products'){
            let checkedColumn = {};

            if(!tempolarData.detailsId) throw new ControllerError('Bad request. Undefined ProductDetails', 400);
            rowData.details_id = tempolarData.detailsId;

            for(column in rowData){
                if(column === 'brand' || column === 'model' || column === 'price_id'){
                    checkedColumn[`${column}`] = rowData[`${column}`];
                    delete rowData[`${column}`]
                }
            }

            data[`${key}`] = await Model.findOrCreate({
                where: checkedColumn,
                defaults: rowData

            });

            if(!data[`${key}`]) throw new ControllerError(`False creating ${key}`, 500);
        }

        if(key === 'ProductDetails'){
            await Model.findOrCreate({
                where: rowData

            }).then(data => {
                tempolarData.detailsId = data[0].dataValues.id;
                data.ProductDetails = data[0].dataValues;
            }).catch(err => {
                data.error = err.message;
                console.log(err);
            });
            //
            // if(data.error) throw new ControllerError(data.error, 500);

        } else {
            data[`${key}`] = await Model.findOrCreate({
                where: rowData
            });

            if(!data[`${key}`]) throw new ControllerError(`False creating ${key}`, 500);
        }

    }
    return data
}

module.exports = async (req, res, next) => {
    try {

        let statusMessages;
        let data = {};


        if(!req.body.Created || !req.body) throw new ControllerError('Bad request. Bad req body', 400);

        for(key in req.body){
            if(key === 'NewProduct'){
                let productData = req.body[`${key}`];
                data[`${key}`] = createRow(productData);

            }
            if(key !== 'Created' && key !== 'NewProduct' && key !== 'OtherData'){
                let tebleData = req.body[`${key}`];
                data[`${key}`] = createRow(tebleData);
            }
        }


        if (data.errors) throw new ControllerError('Server error', 500);
        else statusMessages = 'All Created';

        res.json({
            success: true,
            statusMessages,
            data
        });

    } catch (err) {
        next(err);
    }
};


// //******Require database models******
// const DetailsModel = MySqlDatabase.getModel('ProductDetails');
// const ProductsModel = MySqlDatabase.getModel('Products');
// const RefProdDetailsNavSystem = MySqlDatabase.getModel('Ref-ProductDetailsToNavSystem');
// const RefProdDetailsBackCamera = MySqlDatabase.getModel('Ref-ProductToBackCamera');
// const RefProdDetailsCommunication = MySqlDatabase.getModel('Ref-ProductToCommunicationStandarts');
// const RefProdDetailsFrontCamera = MySqlDatabase.getModel('Ref-ProductToFrontCamera');
// const RefProductToColor = MySqlDatabase.getModel('Ref-ProductToColor');

//
// /*
// * Price
// * Images
// * Screen
// * - Resolution
// * - ScreenType
// * Communication
// * Os
// * Processor
// * Memory
// * - MemoryExpansion
// * ConnectorsGroup
// * Interfaces
// * Battery
// * Corps
// * - CorpsProtection
// * - CorpsMaterial
// *
// * RefProdDetailsNavSystem + NavSystem
// * RefProdDetailsBackCamera + BackCamera
// * RefProdDetailsCommunication + CommStandarts
// * RefProdDetailsFrontCamera + FrontCamera
// *
// *
// * RefProductColorModel + Color
// *  */
