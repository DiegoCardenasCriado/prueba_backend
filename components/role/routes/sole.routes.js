const { Router } = require('express');
const { check } = require('express-validator');
const { verifyRole } = require('../../../helpers/auth');
const { requiredField } = require('../../../middleware/field-validate');
const { rolePost } = require('../controllers/role.controller');

const router = Router();

// SAVE(POST) ROLE
router.post('/', [
    verifyRole(),
    check('name', 'The name is required.').not().isEmpty(),
    requiredField,
], rolePost);

module.exports = router;