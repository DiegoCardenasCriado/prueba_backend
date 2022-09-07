const { Router } = require('express');
const { check }  = require('express-validator');

const { requiredField } = require('../../../middleware/field-validate');
const { productGet, productPost } = require('../controllers/product.controller');
const { verifyRole } = require('../../../helpers/auth');

const router = Router();

// GET ALL PRODUCTS
router.get('/', productGet);

// SAVE(POST) PRODUCT
router.post('/', [
    verifyRole(),
    check('name', 'The name is required.').not().isEmpty(),
    check('description', 'The last name is required.').not().isEmpty(),
    check('price', 'The last name is required.').not().isEmpty(),
    check('price', 'The last name is required.').isNumeric(),
    requiredField
], productPost);

module.exports = router;