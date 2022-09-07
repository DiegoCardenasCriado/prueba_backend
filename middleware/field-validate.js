const { validationResult } = require("express-validator");

// Validate required fields
const requiredField = ( req, res, next ) => {
    const error = validationResult(req);
    if ( !error.isEmpty() ) {
        // Show error
        return res.status(400).json(error);
    }
    next();
}

module.exports = {
    requiredField
}