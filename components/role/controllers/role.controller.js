const Role = require('../models/role.model');

// SAVE(POST) ROLE
const rolePost = async ( req, res ) => {

    try {
        const { id, ...body } = req.body;
        const role = new Role(body);
        await role.save();

        res.status(201).json({
            msg: 'ROLE SAVED!'
        });
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            msg: error.message
        });
    }

};

module.exports = {
    rolePost
};