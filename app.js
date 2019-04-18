const express = require('express');

const app = express();

//********Test connection to database********
// const {sequelize, Sequelize} = require('./DataBase/MySQL/index');
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });

//*******Close the connection*******
// sequelize.close()

//******Require database models******
const ProductsModel = require('./DataBase/MySQL/models/Products');
const ProductPriceModel = require('./DataBase/MySQL/models/ProductPrice');
const ProductDetails = require('./DataBase/MySQL/models/ProductDetails');
const ProductDescriptionModel = require('./DataBase/MySQL/models/ProductDescription');
const ColorsModel = require('./DataBase/MySQL/models/Colors');
const RefProdColorModel = require('./DataBase/MySQL/models/Ref-ProductToColor');



// Настройка для сервера. Дозвіл на запити з даними в різних заголовках
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next()
});
//*************************************************************

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get('/products', async (req, res, next) => {
    let data = await ProductsModel.findOne({
        attributes: ['model'],
        include:[{
            model: ColorsModel,
            attributes: ['name']
        }]

    });
    res.json(data);

});

app.use((req, res, next) => {
    res.end('Error\nThis page is not found!')
});

app.listen(3000, (err) => {
    if (!err) {
        console.log("Listen port 3000...");
    } else {
        console.log(err);
    }
});
