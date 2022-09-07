const { Router } = require('express');
const { check }  = require('express-validator');

const { requiredField } = require('../../../middleware/field-validate');
const { userGet, userPut, userPost, userDelete } = require('../controllers/user.controller');

const { verifyRole } = require('../../../helpers/auth');

const router = Router();

// GET ALL USERS
router.get('/', [
    verifyRole(),
    requiredField
], userGet);

// ASSIGN A ROLE TO USER - BY ID
router.put('/:id', [
    verifyRole(),
    check('id', 'The ID is no valid').not().isUUID(),
    check('role', 'The role is required.').not().isEmpty(),
    requiredField
], userPut );

// SAVE(POST) USER
router.post('/', [
    verifyRole(),
    check('name', 'The name is required.').not().isEmpty(),
    check('last_name', 'The last name is required.').not().isEmpty(),
    check('document', 'The last name is required.').not().isEmpty(),
    check('role_id', 'The ROLE ID is no valid').not().isUUID(),
    requiredField
], userPost);

// DELETE USER
router.delete('/:id', [
    verifyRole(),
    check('id', 'The ID is no valid').not().isUUID(),
    requiredField
], userDelete);

module.exports = router;