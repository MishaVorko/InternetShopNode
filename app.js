const express = require('express');
const cors = require('cors');
const app = express();

const ProductsRouter = require('./routers/products');

app.use(cors({origin: '*'}));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(ProductsRouter);


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
