const router = require('express').Router();
const getAllProducts = require('../controllers/products/getAllProducts');
const getById = require('../controllers/products/getById');
const createProduct = require('../controllers/products/createProduct');

router.get('/:limit/:page/:search_string/:brand/:min_price-:max_price/:color', getAllProducts);
router.get('/:id', getById);
router.post('/create', createProduct);

// router.put('/update/:id', updateProduct);
// router.delete('/delete/:id', deleteProduct);

module.exports = router;
