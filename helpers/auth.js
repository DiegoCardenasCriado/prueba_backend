const User = require("../components/user/model/user.model");
const Role = require("../components/role/models/role.model");

const verifyRole = ( role = 'admin' ) => {

    return async( req, res , next ) => {
    
        const id = req.header('Auth');
    
        if ( !id ) {
            return res.status(401).json({
                msg: 'Auth parameter was not sent in the header - <id_user>'
            })
        }
    
        try {
            const user  = await User.findByPk( id );
            
            if ( !user ) {
                return res.status(400).json({
                    msg: 'You cannot access this resource. Your user does not exist in the database.'
                });
            }
            const { name } = await Role.findOne({
                where: {
                    id: user.roles_id
                }
            });
            if ( name != role ) {
                return res.status(401).json({
                    msg: `Your user is not allowed to use this resource.`
                });
            }
    
            next();
                
        } catch ( error ) {
            console.log( error );
            res.status(500).json({
                msg: error.message
            });
        }            
    }
}


module.exports = {
    verifyRole
}