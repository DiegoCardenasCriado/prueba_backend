const { Router } = require('express');
const { check }  = require('express-validator');

const { requiredField } = require('../../../middleware/field-validate');
const { saleGet, salePut, salePost, saleDelete } = require('../controllers/sale.controller');

const { verifyRole } = require('../../../helpers/auth');

const router = Router();

// GET ALL SALES
router.get('/', saleGet);

// SAVE(POST) SALE
router.post('/', [
    check('qty', 'The quantity (qty) is required.').not().isEmpty(),
    check('users_id', 'The USER ID is no valid').isUUID(),
    check('products_id', 'The PRODUCT ID is no valid').isUUID(),
    requiredField
], salePost);

// UPDATE SALE
router.put('/:id', [
    verifyRole(),
    check('users_id', 'The USER ID is no valid').not().isUUID(),
    check('products_id', 'The PRODUCT ID is no valid').not().isUUID(),
    requiredField
], salePut );

// DELETE PRODUCT
router.delete('/:id', [
    verifyRole(),
    check('id', 'The ID is no valid').isUUID(),
    requiredField
], saleDelete);

module.exports = router;