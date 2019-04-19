const router = require('express').Router();
const getAllProducts = require('../controllers/products/getAllProducts');

router.get('/products', getAllProducts);

module.exports = router;
