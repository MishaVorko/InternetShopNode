const router = require('express').Router();
const getAllProducts = require('../controllers/products/getAllProducts');
const getById = require('../controllers/products/getById');

router.get('/:limit/:page/:search_string/:brand/:min_price-:max_price/:color', getAllProducts);
router.get('/:id', getById);

module.exports = router;
