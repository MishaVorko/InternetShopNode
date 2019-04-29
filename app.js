const express = require('express');
const cors = require('cors');
const app = express();

const ControllerError = require('./errors/ControllerError');
const ProductsRouter = require('./routers/products');

app.use(cors({origin: '*'}));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/products', ProductsRouter);


app.use((req, res, next) => {
    next(new ControllerError('This page is not found!', 404))
});

app.use((err, req, res, next) => {
    if(!err.status) res.json(err);
    else res.status(err.status).json(err)

});

app.listen(3000, (err) => {
    if (!err) {
        console.log("Listen port 3000...")
    } else {
        console.log(err)
    }
});
