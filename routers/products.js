const router = require('express').Router();
const getAllProducts = require('../controllers/products/getAllProducts');

router.get('/:limit/:page/:search_string/:brand/:min_price-:max_price/:color', getAllProducts);

module.exports = router;
