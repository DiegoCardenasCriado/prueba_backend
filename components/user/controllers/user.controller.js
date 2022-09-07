const User = require('../model/user.model');

const userGet = async( req, res ) => {

    try {
        const users = await User.findAll();
        res.status(200).json({
            users
        });
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            msg: error.message
        });
    }
}

const userPut = async(req, res) => {

    const { id } = req.params;
    const { role } = req.body;

    try {
        const user = await User.findByPk( id );
        if ( !user ) {
            return res.status(400).json({
                msg: 'The user does not exist'
            });
        }
        user.update({ role });
        res.status(200).json({
            msg: 'ASSIGNED ROLE!'
        });
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            msg: error.message
        });
    }
}

const userPost = async(req, res) => {
    
    const { id, ...body } = req.body;
    console.log(body);
    try {
        const user = new User(body);
        await user.save();

        res.status(201).json({
            msg: 'USER SAVED!',
        });
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            msg: error.message
        });
    }
}

const userDelete = async(req, res) => {
    
    const { id } = req.params;
    
    try {
        const user = await User.findByPk( id );

        if ( !user ) {
            return res.status(400).json({
                msg: 'The user does not exist'
            });
        }
            user.destroy();
            res.status(200).json({
                msg: 'DELETED USER!'
            });
        
    } catch ( error ) {
        console.log( error );
        res.status(500).json({
            msg: error.message
        });
    }
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete
}